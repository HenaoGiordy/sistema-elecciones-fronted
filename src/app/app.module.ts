import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './components/shared/shared.module';
import { DialogoComponent } from './components/dashboard/usuarios/dialogo/dialogo.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { NavComponent } from './components/estudiantes/nav/nav.component';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DialogoComponent,
    EstudiantesComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
