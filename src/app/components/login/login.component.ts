import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Candidato } from 'src/app/interfaces/candidato';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading = false;
  form:FormGroup;
  listaCandidatos !: Candidato[];
  displayedColumns: string[] = ['numero', 'nombre', 'programa', 'codigo'];
  
 constructor(private fb:FormBuilder, private _snackBar: MatSnackBar, private router:Router){
  this.form = fb.group(
    {
      usuario:['', Validators.required], 
      contraseña:['', Validators.required]
    }
  )
 }

 ingresar(){
  const usuario = this.form.value.usuario
  const constraseña = this.form.value.contraseña
  if(usuario == "Admin" && constraseña == "12345"){
    
    this.loadingSpinnerAdmin()
    
    return
    
  }
  if(usuario == "Estudiante" && constraseña == "12345"){

    this.loadingSpinnerEstudiante()
    return
    
  }
  else{
    this.error()  
    this.form.reset()
  }
    
 }

 
  error(){
    this._snackBar.open("Usuario o contraseña incorrectos", '', 
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



}
