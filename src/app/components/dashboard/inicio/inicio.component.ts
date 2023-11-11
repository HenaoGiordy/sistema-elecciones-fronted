import { AfterContentInit, Component, OnInit } from '@angular/core';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  public numeroCandidatos !: number ;
  public numeroEstudiantes !: number  ;

 
  

  constructor(private servicio:UsuarioService ){}
  
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

  

}
