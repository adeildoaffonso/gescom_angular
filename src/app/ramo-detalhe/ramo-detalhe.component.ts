import { Component, OnInit, Input } from '@angular/core';
import { Ramo } from '../ramo';

@Component({
  selector: 'app-ramo-detalhe',
  templateUrl: './ramo-detalhe.component.html',
  styleUrls: ['./ramo-detalhe.component.css']
})
export class RamoDetalheComponent implements OnInit {

  @Input() ramo: Ramo;

  constructor() { }

  ngOnInit() {
  }

}
