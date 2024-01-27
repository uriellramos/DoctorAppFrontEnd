import { Component, OnInit } from '@angular/core';
import { CompartidoService } from '../compartido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {

  username: string='';

  constructor(private Router:Router, private CompartidoService: CompartidoService)
  {

  }
  ngOnInit(): void {
    const usuarioToken = this.CompartidoService.obtenerSesion();
    if (usuarioToken!=null)
    {
      this.username = usuarioToken.username;
    }
  }

  cerrarSesion(){
    this.CompartidoService.eleiminarSesion();
    this.Router.navigate(['login']);

  }

}
