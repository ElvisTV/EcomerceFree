import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthRoutingModule } from './auth-routing.module';
import { IconoFlotanteComponent } from './icono-flotante/icono-flotante.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    IconoFlotanteComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
