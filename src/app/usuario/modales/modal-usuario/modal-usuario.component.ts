import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Registro } from '../../interfaces/registro';
import { Rol } from '../../interfaces/rol';
import { UsuarioService } from '../../servicios/usuario.service';
import { CompartidoService } from '../../../compartido/compartido.service';

@Component({
  selector: 'app-modal-usuario',
  templateUrl: './modal-usuario.component.html',
  styleUrl: './modal-usuario.component.css'
})
export class ModalUsuarioComponent {
  formUsuario: FormGroup
  titulo: string = 'Registrar';
  nombreBoton:string='Guardar';
  listaRoles:Rol[]=[];
  /**
   *
   */
  constructor(private modal:MatDialogRef<ModalUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public datosUsuario:Registro,
    private fb: FormBuilder,
    private _usuarioServicio: UsuarioService,
    private _compartidoService: CompartidoService ) {
      this.formUsuario = this.fb.group({
        username:['', Validators.required],
        password:['', Validators.required],
        apellidos:['', Validators.required],
        nombres:['', Validators.required],
        email:['', Validators.required],
        rol:['', Validators.required],
      });

      this._usuarioServicio.listadoRoles().subscribe({
        next:(data)=>{
          if(data.isExitoso)this.listaRoles = data.resultado;
        },
        error:(e)=>{}
      });

  }
  registrarUsuario(){
    const usuario: Registro = {
      username: this.formUsuario.value.username,
      password: this.formUsuario.value.password,
      apellidos: this.formUsuario.value.apellidos,
      nombres: this.formUsuario.value.nombres,
      email: this.formUsuario.value.email,
      rol: this.formUsuario.value.rol,
    };
    this._usuarioServicio.registrar(usuario).subscribe({
      next:(data)=>{
        this._compartidoService.mostrarAlerta('REgistrado con exito','Completo');
        this.modal.close("true");
      },
      error:(e)=>{
        this._compartidoService.mostrarAlerta(e.error.mensaje, 'Error');
      }
    });
  }
  get email(){
    return this.formUsuario.get('email');
  }
}
