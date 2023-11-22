import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Candidato } from 'src/app/interfaces/candidato';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DialogovotarComponent } from './dialogovotar/dialogovotar.component';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit{
  candidatos !: Candidato[] 

  constructor(private candidatoService:UsuarioService, public dialog: MatDialog){}
  ngOnInit(): void {
    this.getCandidatos()
  }


  getCandidatos(){
    this.candidatoService.getUsuarios().subscribe(candidatos =>{
      this.candidatos = candidatos
    }) 
  }
  openDialogV(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogovotarComponent, {
      width: '250',
      
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  
}
