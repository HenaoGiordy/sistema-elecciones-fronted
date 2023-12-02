import { AfterContentInit, Component, OnInit } from '@angular/core';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialoComponent } from './dialo/dialo.component';
import { DialofComponent } from './dialof/dialof.component';
import { Candidato } from 'src/app/interfaces/candidato';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  public numeroCandidatos !: number ;
  public numeroEstudiantes !: number  ;

 
  public ganador !: any;

  constructor(private servicio:UsuarioService , public dialog: MatDialog){}
  
  ngOnInit(): void {
    
    this.contarUsuarios()
    this.contarCandidatos()
    
    
  }

  

  contarCandidatos(){
    this.servicio.contarCandidatos().subscribe(
      estudiantes =>{
        if(estudiantes == 0){
          this.numeroCandidatos = 0
          
        }else{
          this.numeroCandidatos = estudiantes
          console.log(this.numeroCandidatos)
        }
        
      }
    )
  }
  
  contarUsuarios(){
    this.servicio.contarUsuarios().subscribe(
      estudiantes =>{
        if(estudiantes == 0){
          this.numeroEstudiantes = 0
          
          
        }else{
          this.numeroEstudiantes = estudiantes
          console.log(this.numeroEstudiantes)
        }
        
      }
    )
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogo = this.dialog.open(DialoComponent, {
      width: '250',
      
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogo.afterClosed().subscribe(resp => {
      localStorage.setItem("votacion", "true");
    })
  }

  openDialogF(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogo = this.dialog.open(DialofComponent, {
      width: '250',
      
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogo.afterClosed().subscribe( r => {
      if(r){
        this.servicio.ganador().subscribe(ganador =>{

          this.ganador = ganador
        })
      }
        
    })
  }

  

}
