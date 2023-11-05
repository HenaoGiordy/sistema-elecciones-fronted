import { Component } from '@angular/core';
import { Candidato } from 'src/app/interfaces/candidato';


const ELEMENT_DATA: Candidato[] = [
  {numero: 1, nombre: 'Giordy Henao', programa: 'Tecnología en desarrollo de software', codigo: 16888664, votos: 0},
];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  displayedColumns: string[] = ['numero', 'nombre', 'programa', 'codigo'];
  dataSource = ELEMENT_DATA;
}
