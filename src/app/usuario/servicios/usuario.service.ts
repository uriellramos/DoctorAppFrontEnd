import { Injectable } from '@angular/core';
import { environment } from '../../../Environments/environment';
import { HttpClient } from '@angular/common/http';
import { Login } from '../interfaces/login';
import { Sesion } from '../interfaces/sesion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  baseUrl: string = environment.apiUrl + 'usuario/';
  constructor(private http:HttpClient) {}

  iniciarSesion(request:Login):Observable<Sesion>{
    return this.http.post<Sesion>(`${this.baseUrl}login`, request)
  }
}
