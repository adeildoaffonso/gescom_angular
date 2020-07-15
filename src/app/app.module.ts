import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RamoComponent } from './ramo/ramo.component';
import { RamoDetalheComponent } from './ramo-detalhe/ramo-detalhe.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { SeguradoComponent } from './dadosbasicos/componentes/segurado.component';
import { SeguradoraComponent } from './dadosbasicos/componentes/seguradora.component';
import { AgenciadorComponent } from './dadosbasicos/componentes/agenciador.component';
import { CorretorComponent } from './dadosbasicos/componentes/corretor.component';
import { ListaProcessosComponent } from './lista-processos/lista-processos.component';
import { ListaDadosBasicosComponent } from './lista-dados-basicos/lista-dados-basicos.component';

@NgModule({
  declarations: [
    AppComponent,
    RamoComponent,
    RamoDetalheComponent,
    MessagesComponent,
    DashboardComponent,
    SeguradoComponent,
    SeguradoraComponent,
    AgenciadorComponent,
    CorretorComponent,
    ListaProcessosComponent,
    ListaDadosBasicosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
