import { Injectable } from '@angular/core';
import { Ramo } from './ramo';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RamoService {

  private readonly API = 'http://dsv.gescom_api.com.br/api/ramo/ListarRamo';

  constructor(private http: HttpClient,  private messageService: MessageService) { }

  listar(): Observable<Ramo[]> {
    return this.http.get<Ramo[]>(this.API);
  }

}

