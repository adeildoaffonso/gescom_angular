
import { DashboardComponent } from './dashboard/dashboard.component';
import { RamoComponent } from './ramo/ramo.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RamoDetalheComponent } from './ramo-detalhe/ramo-detalhe.component';
import { ListaDadosBasicosComponent } from './lista-dados-basicos/lista-dados-basicos.component';
import { ListaProcessosComponent } from './lista-processos/lista-processos.component';
import { AgenciadorComponent } from './dadosbasicos/componentes/agenciador.component';


const routes: Routes = [
  {path: 'ramos', component: RamoComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detalheRamo/:codigo', component: RamoDetalheComponent},
  {path: 'listaDadosBasicos', component: ListaDadosBasicosComponent},
  {path: 'listaProcessos', component: ListaProcessosComponent},
  {path: 'listaAgenciador', component: AgenciadorComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
