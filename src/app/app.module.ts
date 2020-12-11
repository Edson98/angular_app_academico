import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipoAcademicaComponent } from './tipo-academica/tipo-academica/tipo-academica.component';
import { MenuComponent } from './template/menu/menu.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from './template/footer/footer.component';
import { UnidadAcademicaComponent } from './unidad-academica/unidad-academica/unidad-academica.component';
import { LoginComponent } from './login/login/login.component';
import { AuthService } from './login/login/services/auth.service';
import {RolService } from './login/login/services/rol.service';
import { RubricasComponent } from './rubricas/rubricas/vista-principal/rubricas.component';
import { AddRubricasComponent } from './rubricas/rubricas/add-rubricas/add-rubricas/add-rubricas.component';
import { VistaAdministrativaComponent } from './rubricas/rubricas/vista-administrativa/vista-administrativa/vista-administrativa.component';
import { CriteriosComponent } from './rubricas/rubricas/criterios/criterios/criterios.component';
import { NivelesLogroComponent } from './rubricas/rubricas/niveles-logro/niveles-logro/niveles-logro.component';
import { CardProjectComponent } from './rubricas/rubricas/vista-principal/card-project/card-project.component'
@NgModule({
  declarations: [
    AppComponent,
    TipoAcademicaComponent,
    MenuComponent,
    FooterComponent,
    UnidadAcademicaComponent,
    LoginComponent,
    RubricasComponent,
    AddRubricasComponent,
    VistaAdministrativaComponent,
    CriteriosComponent,
    NivelesLogroComponent,
    CardProjectComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [RolService ,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
