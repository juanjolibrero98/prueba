import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {  CanActivate } from '@angular/router';
import { TokenService } from '@services/token.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ){}

  //guard para dar mejor servicio al usu, si tiene token activo ve a la app interna
  //de esta manera si el usuario esta logueado no entra en login, registro etc.. del tiron a la app interna
  canActivate(): boolean {
    const isValidToken = this.tokenService.isValidRefreshToken();
    if (isValidToken) {
      this.router.navigate(['/app']);
    }
    return true;
  }

}
