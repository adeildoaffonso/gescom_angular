import { Component, OnInit } from '@angular/core';
import { Ramo } from '../ramo';
import { RamoService } from '../ramo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ramos: Ramo[] = [];

  constructor(private ramoService: RamoService) { }

  ngOnInit() {

  }

}
