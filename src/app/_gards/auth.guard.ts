import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CompartidoService } from '../compartido/compartido.service';
import { Router } from 'express';

export const authGuard: CanActivateFn = (route, state) => {
  const compartidoServicio = inject(CompartidoService);
  const router = inject(Router);

  const usuarioToken = compartidoServicio.obtenerSesion();
  if(usuarioToken != null)
  {
    return true;
  }else{
    router.navigate('[login]');
    return false;
  }
  return true;
};