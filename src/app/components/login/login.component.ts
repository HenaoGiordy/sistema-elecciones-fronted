import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading = false;
  form:FormGroup;
  
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
  if(usuario == "Giordy" && constraseña == "12345"){
    this.loadingSpinner()
    
    
  }else{
    this.error()
    this.form.reset()
  }

 }

 
  error(){
    this._snackBar.open("Usuario o contraseña incorrectos", '', 
    {duration: 5000, horizontalPosition: 'center',
    verticalPosition: 'bottom'})
  }
    
  loadingSpinner(){
    this.loading = true
    setTimeout(()=>{
      this.router.navigate(['dashboard'])
    },1000)
  }



}
