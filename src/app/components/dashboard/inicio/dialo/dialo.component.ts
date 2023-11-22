import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialo',
  templateUrl: './dialo.component.html',
  styleUrls: ['./dialo.component.css']
})
export class DialoComponent {
  constructor(private _snackBar: MatSnackBar){}

  mostrarFinalizar(){
    this._snackBar.open("La votación ha iniciado", '', {duration: 5000, horizontalPosition: 'center',
    verticalPosition: 'bottom'})
  }
}
