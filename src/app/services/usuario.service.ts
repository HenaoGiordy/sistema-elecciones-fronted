import { Injectable } from '@angular/core';
import { Candidato } from '../interfaces/candidato';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  
  constructor(private http:HttpClient) { 
    
  }



  getUsuarios():Observable<Candidato[]>{
    return this.http.get<Candidato[]>("http://localhost:8080/candidato/all");
  }

  
  buscarUsuario(id:String):Observable<Candidato>{
    return this.http.get<Candidato>(`http://localhost:8080/usuario/find/${id}`)
  }

  eliminarUsuario(index:number){
    
  }
}
