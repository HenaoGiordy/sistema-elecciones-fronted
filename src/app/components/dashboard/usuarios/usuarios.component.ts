import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Candidato } from 'src/app/interfaces/candidato';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DialogoComponent } from './dialogo/dialogo.component';





@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{

  listaCandidatos : Candidato[] = []

  
  
  displayedColumns: string[] = ['numero', 'nombre', 'programa', 'codigo', 'acciones'];
  
  // dataSource !: MatTableDataSource<any>;

  constructor(private _usuarioService: UsuarioService, private _snackBar:MatSnackBar, public dialog: MatDialog){
    
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
    this._usuarioService.eliminarUsuario(index);
    this.cargarUsuarios()
    this._snackBar.open("El usuario ha sido eliminado con éxito",'',
    {duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom'})
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogoComponent, {
      width: '500px',
      minHeight: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

