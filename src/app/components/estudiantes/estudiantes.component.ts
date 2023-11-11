import { Component, OnInit } from '@angular/core';
import { Candidato } from 'src/app/interfaces/candidato';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit{
  candidatos !: Candidato[] 

  constructor(private candidatoService:UsuarioService){}
  ngOnInit(): void {
    this.getCandidatos()
  }


  getCandidatos(){
    this.candidatoService.getUsuarios().subscribe(candidatos =>{
      this.candidatos = candidatos
    }) 
  }
}
