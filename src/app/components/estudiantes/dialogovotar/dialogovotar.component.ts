import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Candidato } from 'src/app/interfaces/candidato';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-dialogovotar',
  templateUrl: './dialogovotar.component.html',
  styleUrls: ['./dialogovotar.component.css']
})
export class DialogovotarComponent {
  

  

  constructor(private router:Router, private _snackBar: MatSnackBar, private usuarioService: UsuarioService){}

  volverLogin(){
    
    this.router.navigate(["login"])
    this._snackBar.open("Gracias por votar", '', {duration: 5000, horizontalPosition: 'center',
    verticalPosition: 'bottom'})
  }

  votar(candidato:Candidato){
    
    this.usuarioService.votar(candidato).subscribe();
  }

}
