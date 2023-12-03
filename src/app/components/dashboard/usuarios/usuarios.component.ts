import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Candidato } from 'src/app/interfaces/candidato';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DialogoComponent } from './dialogo/dialogo.component';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogoEComponent } from './dialogo-e/dialogo-e.component';





@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{

  listaCandidatos : Candidato[] = []

  
  
  displayedColumns: string[] = ['numero', 'nombre', 'programa', 'codigo', 'acciones'];
  
  // dataSource !: MatTableDataSource<any>;

  constructor(private _usuarioService: UsuarioService, private route:Router ,private _snackBar:MatSnackBar, public dialog: MatDialog ){
    
  }

  ngOnInit(): void {
    this.cargarUsuarios()
    
  }
   cargarUsuarios(){
    this._usuarioService.getUsuarios().subscribe(candidatos =>{
      console.log(candidatos)
      this.listaCandidatos = candidatos
      // this.dataSource = new MatTableDataSource(this.listaCandidatos)
    })
      
   }

  eliminarUsuario(index:number){
    this._usuarioService.eliminarUsuario(index).subscribe();
    window.location.reload()
    this._snackBar.open("El usuario ha sido eliminado con éxito",'',
    {duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom'})
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  dialogoEliminar(enterAnimationDuration: string, exitAnimationDuration: string, index:number){
    const dialogo = this.dialog.open(DialogoEComponent, {
      width: '300px',
      minHeight: '100px',
      enterAnimationDuration,
      exitAnimationDuration
    })
    dialogo.afterClosed().subscribe(e => {
      if(e){
        this.eliminarUsuario(index)
        
      }
    })
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string):void {
      this.dialog.open(DialogoComponent, {
      width: '500px',
      minHeight: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    })
  }
}

