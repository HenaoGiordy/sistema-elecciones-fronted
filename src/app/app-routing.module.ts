import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'estudiante', component: EstudiantesComponent},
  {path: 'dashboard', loadChildren: ()=> import('./components/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'**', redirectTo: 'login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
