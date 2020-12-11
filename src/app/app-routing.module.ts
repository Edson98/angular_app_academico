import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { TipoAcademicaComponent } from '../app/tipo-academica/tipo-academica/tipo-academica.component';
import { UnidadAcademicaComponent } from './unidad-academica/unidad-academica/unidad-academica.component';
import { RubricasComponent } from './rubricas/rubricas/vista-principal/rubricas.component';
import { AddRubricasComponent } from './rubricas/rubricas/add-rubricas/add-rubricas/add-rubricas.component';
import { VistaAdministrativaComponent } from './rubricas/rubricas/vista-administrativa/vista-administrativa/vista-administrativa.component';
import { CriteriosComponent } from './rubricas/rubricas/criterios/criterios/criterios.component';
import { NivelesLogroComponent } from './rubricas/rubricas/niveles-logro/niveles-logro/niveles-logro.component';


const routes: Routes = [

    {
      path : 'login', component : LoginComponent
    },
    {
      path : 'tipo',
      component : TipoAcademicaComponent
    },
    {
      path : 'unidad',
      component : UnidadAcademicaComponent
    },
    {
      path : 'rubricas',
      component : RubricasComponent
    },
    {
      path : 'rubricas/:id',
      component : AddRubricasComponent

    },
    {
      path: 'rubricas/vista/admin/:id1/:id2',
      component : VistaAdministrativaComponent

    },
    {
      path : 'rubricas/indicador/:id',
      component : CriteriosComponent
    },
    {
      path : 'rubricas/indicador/nivellogro/:id',
      component : NivelesLogroComponent
    }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
