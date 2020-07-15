import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agenciador } from '../../dadosBasicos/modelos/agenciador';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgenciadorService {

  private readonly API = 'http://dsv.gescom_api.com.br/api/agenciador/ListarAgenciador';

  ag: any = [];

  constructor(private http: HttpClient) { }

  listar(): Observable<Agenciador[]> {
    return this.http.get<Agenciador[]>(this.API);
  }

}
