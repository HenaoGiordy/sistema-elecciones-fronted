import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Candidato } from 'src/app/interfaces/candidato';
import { resultado } from 'src/app/interfaces/resultado';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loading = false;
  form:FormGroup;
  listaCandidatos !: Candidato[];
  displayedColumns: string[] = ['numero', 'nombre', 'programa', 'codigo'];

  //variables para resultados
  single : resultado[] = [{"name" : "Giordy", "value" : 10},{"name" : "Jaider", "value" : 10}]; 
  view: [number, number] = [700, 400];

  cardColor : string = '#232837';
  
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

  getUsuarios(){
    this._usuarioService.getUsuarios().subscribe(candidatos =>{
      this.listaCandidatos = candidatos
    })
    
  }
  

  getCandidatos(){
    

    

  }

}
