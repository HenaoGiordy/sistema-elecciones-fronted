import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialogovotar',
  templateUrl: './dialogovotar.component.html',
  styleUrls: ['./dialogovotar.component.css']
})
export class DialogovotarComponent {

  constructor(private router:Router, private _snackBar: MatSnackBar){}

  volverLogin(){
    this.router.navigate(["login"])
    this._snackBar.open("Gracias por votar", '', {duration: 5000, horizontalPosition: 'center',
    verticalPosition: 'bottom'})
  }
}
