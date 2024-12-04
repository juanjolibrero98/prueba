import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken,
  HttpContext,
} from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { TokenService } from '@services/token.service';
import { AuthService } from '@services/auth.service';

const CHECK_TOKEN = new HttpContextToken<boolean>(() => false);

export function checkToken() {
  return new HttpContext().set(CHECK_TOKEN, true);
}

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService,
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.context.get(CHECK_TOKEN)) {
      const isValidToken = this.tokenService.isValidToken(); // accessToken
      if (isValidToken) {
        return this.addToken(request, next);
      } else {
        return this.updateAccessTokenAndRefreshToken(request, next);//si token se vence, hace esto
      }
    }
    return next.handle(request);
  }

  private addToken(request: HttpRequest<unknown>, next: HttpHandler) {
    const accessToken = this.tokenService.getToken();
    if (accessToken) {
      const authRequest = request.clone({//si existe token, clona el request y le añade en el header el token, para enviarlo
        headers: request.headers.set('Authorization', `Bearer ${accessToken}`)
      });
      return next.handle(authRequest);//es lo que permite que se ejecute la request modificado
    }
    return next.handle(request);//lo envia sin modificar el header
  }

  private updateAccessTokenAndRefreshToken(request: HttpRequest<unknown>, next: HttpHandler) {
    const refreshToken = this.tokenService.getRefreshToken();
    const isValidRefreshToken = this.tokenService.isValidRefreshToken();
    if (refreshToken && isValidRefreshToken) {
      return this.authService.refreshToken(refreshToken)
      .pipe(
        switchMap(() => this.addToken(request, next)),
      )
    }
    return next.handle(request);
  }
}
