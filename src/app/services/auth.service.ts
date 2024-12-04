import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { switchMap, tap } from 'rxjs/operators';
import { TokenService } from '@services/token.service';
import { MeService } from '@services/me.service';
import { ResponseLogin } from '@models/auth.model';
import { User } from '@models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.API_URL;
  //con la primera llamada, creamos un estado general del getProfile(), para que cualquier componente pueda usar los datos del usuario logado y no tenga que llamar siempre a la api
  //se carga en el layout.component.ts para que tenga acceso toda la zona privada
  user$ = new BehaviorSubject<User | null>(null);

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private meService: MeService,
  ) { }

  getDataUser() {
    return this.user$.getValue();
  }

  login(email: string, password: string) {
    return this.http.post<ResponseLogin>(`${this.apiUrl}/api/v1/auth/login`, {
      email,
      password
    })
    .pipe(//antes de que me rediriga(que haga el subscribe de la funcion que llama a este login), quiero que me guarde el token
      tap(response => {
        this.tokenService.saveToken(response.access_token);
        this.tokenService.saveRefreshToken(response.refresh_token);
      })
    );
  }

  refreshToken(refreshToken: string) {
    return this.http.post<ResponseLogin>(`${this.apiUrl}/api/v1/auth/refresh-token`, {refreshToken})
    .pipe(//antes de que me rediriga(que haga el subscribe de la funcion que llama, quiero que me guarde el token
      tap(response => {
        this.tokenService.saveToken(response.access_token);
        this.tokenService.saveRefreshToken(response.refresh_token);
      })
    );;
  }

  register(name: string, email: string, password: string) {
    return this.http.post(`${this.apiUrl}/api/v1/auth/register`, {
      name,
      email,
      password
    });
  }

  //metodo para hacer el registro y hacer el login de 1
  registerAndLogin(name: string, email: string, password: string) {
    return this.register(name, email, password)
    .pipe(
      switchMap(() => this.login(email, password))
    );
  }

  //metodo para para confirmar si el usuario que se le pasa está activo o no, si esta activo te devuelve false
  isAvailable(email: string) {
    return this.http.post<{isAvailable: boolean}>(`${this.apiUrl}/api/v1/auth/is-available`, {email});
  }

  //metodo para iniciar proceso de recuperacion de psw, se envia correo a ese email
  recovery(email: string) {
    return this.http.post(`${this.apiUrl}/api/v1/auth/recovery`, { email });
  }

  //metodo para cambiar la psw, tras acceder a la pag dandole click al link del email
  changePassword(token: string, newPassword: string) {
    return this.http.post(`${this.apiUrl}/api/v1/auth/change-password`, { token, newPassword });
  }

  //metodo para obtener datos del usuario logado
  //de manera que cuando hace login, se hace la llamada al getProfile() para mostrar la info en el perfil del navbar, y guardamos de forma reactiva la info del perfil en userData$, y usamos esa
  //variable para distribuir la info a los demas componentes que lo necesite
  //{ context: checkToken() } es para enviar el token en la peticion con el interceptor
  getProfile() {
    return this.meService.getMeProfile()
    .pipe(//antes que acabe, guarda datos del user
      tap(user => {
        this.user$.next(user);
      })
    );
  }

  logout() {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
  }
}
