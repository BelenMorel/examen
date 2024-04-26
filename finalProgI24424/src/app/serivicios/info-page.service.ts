import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  constructor(private http: HttpClient) { }

  public ObtenerDatos(): Observable<any[]>{
    return this.http.get<any[]>('/assets/data/datos.json');
  }
}
