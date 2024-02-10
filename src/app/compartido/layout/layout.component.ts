import { Component, OnInit } from '@angular/core';
import { CompartidoService } from '../compartido.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
  username: string = '';

  constructor(
    private Router: Router,
    private CompartidoService: CompartidoService,
    private cookieService: CookieService
  ) {}
  ngOnInit(): void {
    const usuarioSesion = this.CompartidoService.obtenerSesion();
    if (usuarioSesion != null) {
      this.username = usuarioSesion;
    }
  }

  cerrarSesion() {
    this.CompartidoService.eleiminarSesion();

    this.cookieService.delete('Authorization', '/');
    this.Router.navigate(['login']);
  }
}
