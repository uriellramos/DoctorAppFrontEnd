import { Injectable } from '@angular/core';
import { environment } from '../../../Environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../interfaces/api-response';
import { Especialidad } from '../interfaces/especialidad';
import { request } from 'http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class EspecialidadService {
  baseUrl: string = environment.apiUrl + 'especialidad/';
  constructor(private http: HttpClient, private cookieService:CookieService) {}

  lista(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}`,{
      headers:
      {
        'Authorization':this.cookieService.get('Authorization')
      }
    });
  }
  listaActivos(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}ListadoActivos`);
  }

  crear(request: Especialidad): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}`, request);
  }

  editar(request: Especialidad): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.baseUrl}`, request);
  }
  eliminar(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.baseUrl}${id}`);
  }
}
