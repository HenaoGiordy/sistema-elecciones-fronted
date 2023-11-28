import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Candidato } from 'src/app/interfaces/candidato';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DialogovotarComponent } from './dialogovotar/dialogovotar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit{
  
  candidatos !: Candidato[] 
  codigo : string | null = localStorage.getItem("usuario")

  constructor(private candidatoService:UsuarioService, public dialog: MatDialog, private router:Router, private _snackBar: MatSnackBar){}
  ngOnInit(): void {
    this.getCandidatos()
  }


  getCandidatos(){
    this.candidatoService.getUsuarios().subscribe(candidatos =>{
      this.candidatos = candidatos
    }) 
  }


  openDialogV(enterAnimationDuration: string, exitAnimationDuration: string, candidato:Candidato, codigo:string|null): void {
    const dialo = this.dialog.open(DialogovotarComponent, {
      width: '250',
      data: {candidato},
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialo.afterClosed().subscribe(e => {
      if(e){
        this.votar(candidato , codigo);
      }
    })
  }

  
  votar(candidato:Candidato, codigo:string|null){
    console.log(this.codigo)
    this.candidatoService.votar(candidato, codigo).subscribe();
    this.router.navigate(["login"])
    this._snackBar.open("Gracias por votar", '', {duration: 5000, horizontalPosition: 'center',
    verticalPosition: 'bottom'})
  }
  
}
