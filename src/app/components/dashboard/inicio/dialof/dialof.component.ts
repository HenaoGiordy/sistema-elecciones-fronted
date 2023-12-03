import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialof',
  templateUrl: './dialof.component.html',
  styleUrls: ['./dialof.component.css']
})
export class DialofComponent {
  constructor(private _snackBar: MatSnackBar){}

  mostrarFinalizar(){
    this._snackBar.open("Votación ha Finalizada", '', {duration: 5000, horizontalPosition: 'center',
    verticalPosition: 'bottom'})
  }
  
}
