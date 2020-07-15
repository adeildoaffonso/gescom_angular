import { AgenciadorService } from './../servicos/agenciador.service';
import { Component, OnInit } from '@angular/core';
import { Agenciador } from '../../dadosBasicos/modelos/agenciador';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agenciador',
  templateUrl: './agenciador.component.html',
  styleUrls: ['./agenciador.component.css']
})

export class AgenciadorComponent implements OnInit {

  allAgenciador: Observable<Agenciador[]>;

  constructor(private servico: AgenciadorService) { }

  ngOnInit() {
    this.getAllAgenciador();
  }

  getAllAgenciador() {
    this.allAgenciador = this.servico.listar();
  }

}
