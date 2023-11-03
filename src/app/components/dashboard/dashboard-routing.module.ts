import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ResultadosComponent } from './resultados/resultados.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children:[
    {path: 'inicio', component: InicioComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'resultados', component:ResultadosComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
