import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Candidato } from 'src/app/interfaces/candidato';
import { resultado } from 'src/app/interfaces/resultado';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loading = false
  form:FormGroup;
  listaCandidatos !: Candidato[];
  displayedColumns: string[] = ['numero', 'nombre', 'programa', 'codigo'];

  //variables para resultados
  single : resultado[] = []; 
  view: [number, number] = [700, 400];
  cardColor : string = '#525CF5';
  
  //fin


 constructor(private fb:FormBuilder, private _snackBar: MatSnackBar, private router:Router, private _usuarioService:UsuarioService){
  this.form = fb.group(
    {
      usuario:['', Validators.required], 
      contraseña:['', Validators.required]
    }
  )
 }
  ngOnInit(): void {
    this.getUsuarios();
    
  }

 ingresar(){
  const usuario = this.form.value.usuario
  const constraseña = this.form.value.contraseña
  
  this._usuarioService.logearse(this.form.value.usuario, this.form.value.contraseña).subscribe(respuesta => 
    {if(respuesta)
    {
      localStorage.setItem("usuario", usuario);
      this.loadingSpinnerEstudiante()
      return
    }else{
      if(respuesta == null){
        this.yavoto()       
        this.form.reset()

      }else{
        if(usuario == "Admin" && constraseña == "12345"){
          this.loadingSpinnerAdmin()
          return
        }else{
          this.error()       
          this.form.reset()
        }
      }
     
    }
    })
   
 }

 
  error(){
    this._snackBar.open("Usuario o contraseña incorrectos", '', 
    {duration: 5000, horizontalPosition: 'center',
    verticalPosition: 'bottom'})
  }
  yavoto(){
    this._snackBar.open("El usuario ya votó", '', 
    {duration: 5000, horizontalPosition: 'center',
    verticalPosition: 'bottom'})
  }
    
  loadingSpinnerAdmin(){
    this.loading = true
    setTimeout(()=>{
      this.router.navigate(['dashboard'])
      
    },1000)
  }
  loadingSpinnerEstudiante(){
    this.loading = true
    setTimeout(()=>{
      this.router.navigate(['estudiante'])
      
    },1000)
  }

  getUsuarios(){
    this._usuarioService.getUsuarios().subscribe(candidatos =>{
      this.listaCandidatos = candidatos
    })
    
  }
  


}
