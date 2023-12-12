import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Bienvenido a DoctorAppFrontend Angular V17';
  usuarios:any;

  constructor(private http:HttpClient){}

  ngOnInit():void{
    this.http.get('http://localhost:5287/api/Usuario').subscribe({
      next:response => this.usuarios = response,
      error:error => console.log(error),
      complete:() => console.log('la solicitud esta completa'),

    })
  }
}
