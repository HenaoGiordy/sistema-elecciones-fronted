import { Injectable } from '@angular/core';
import { Candidato  } from '../interfaces/candidato';
import { Usuario  } from '../interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  
  constructor(private http:HttpClient) { 
    
  }

  contarUsuarios():Observable<number>{
    return this.http.get<number>("http://localhost:8080/usuario/count")
  }

  contarCandidatos():Observable<number>{
    return this.http.get<number>("http://localhost:8080/candidato/count")
  }

  getUsuarios():Observable<Candidato[]>{
    return this.http.get<Candidato[]>("http://localhost:8080/candidato/all");
  }


  buscarUsuario(id:String):Observable<Usuario>{
    return this.http.get<Usuario>(`http://localhost:8080/usuario/find/${id}`)
  }

  agregarCandidato(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>("http://localhost:8080/candidato/add", {usuario:{
      "codigo" : usuario.codigo,
      "nombre" :usuario.nombre,
      "programa" : usuario.programa,
      
     },
     "votos" : 0
    })
  }

  eliminarUsuario(index:number){
    return this.http.delete(`http://localhost:8080/candidato/delete/${index}`)
  }


  votar(candidato:Candidato){
    return this.http.put(`http://localhost:8080/candidato/votar/${candidato.numeroTarjeton}`,{})
  }

  logearse(codigo:string, password:string):Observable<boolean>{
    return this.http.post<boolean>(`http://localhost:8080/usuario/ingresar/${codigo}/${password}`, {});
  }
}
