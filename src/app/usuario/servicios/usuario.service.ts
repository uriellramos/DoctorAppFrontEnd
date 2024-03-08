import { Injectable } from '@angular/core';
import { environment } from '../../../Environments/environment';
import { HttpClient } from '@angular/common/http';
import { Login } from '../interfaces/login';
import { Sesion } from '../interfaces/sesion';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../interfaces/api-response';
import { Registro } from '../interfaces/registro';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  baseUrl: string = environment.apiUrl + 'usuario/';
  constructor(private http: HttpClient) {}

  iniciarSesion(request: Login): Observable<Sesion> {
    return this.http.post<Sesion>(`${this.baseUrl}login`, request);
  }

  lista(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}`);
  }

  registrar(request: Registro): Observable<Sesion> {
    return this.http.post<Sesion>(`${this.baseUrl}registro`, request);
  }
  listadoRoles(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}listadoRoles`);
  }
}
