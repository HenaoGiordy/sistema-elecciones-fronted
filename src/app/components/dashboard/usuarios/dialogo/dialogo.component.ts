import { Component } from '@angular/core';
import { Candidato } from 'src/app/interfaces/candidato';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent {
  public candidato !: Candidato;

  constructor(private usuarioService: UsuarioService){

  }

  obtenerCandidato(id:String){
    this.usuarioService.buscarUsuario(id).subscribe(candidato => {
      this.candidato = candidato
    })
  }
}
