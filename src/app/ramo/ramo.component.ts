import { Ramo } from './../ramo';
import { Observable } from 'rxjs';
import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';
import { RamoService } from '../ramo.service';

@Component({
  selector: 'app-ramo',
  templateUrl: './ramo.component.html',
  styleUrls: ['./ramo.component.css']
})
export class RamoComponent implements OnInit {

  selecionadoRamo: Ramo;
  ramos: Ramo[];
  allRamos: Observable<Ramo[]>;

  constructor(private ramoService: RamoService
            , private messageService: MessageService) { }

  ngOnInit() {
    this.getAllRamos();
  }

  onSelect(ramo: Ramo): void {
    this.messageService.add(`O Ramo selecionado foi: ${ramo.descricao}`);
    this.selecionadoRamo = ramo;
  }

  getAllRamos() {
    this.allRamos = this.ramoService.listar();
  }

}
