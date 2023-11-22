import { Component,  OnInit, } from '@angular/core';


import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent implements OnInit{
  public usuario !: Usuario;

  
  
  

  constructor(private usuarioService: UsuarioService){
    
  }
  ngOnInit(): void {
    
  }

 
 

  obtenerCandidato(id:String){
    this.usuarioService.buscarUsuario(id).subscribe( usuario=> {
      this.usuario = usuario
    })
    
  }

  agregarCandidato(usuario:Usuario){
    this.usuarioService.agregarCandidato(this.usuario).subscribe(user =>{ 
    })
    
  }

}
