import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Profile, User } from '@models/user.model';
import { Board } from '@models/board.model';
import { checkToken } from '@interceptors/token.interceptor';

@Injectable({
  providedIn: 'root',
})
export class MeService {
  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  //metodo para obtener la info del perfil del usuario logado
  getMeProfile() {
    return this.http.get<User>(`${this.apiUrl}/api/v1/me/profile`, {
      context: checkToken(),
    });
  }

  //metodo que devuelve los board que tiene el user logado, devuelve un array de Board -> Board[]
  getMeBoards() {
    return this.http.get<Board[]>(`${this.apiUrl}/api/v1/me/boards`, {
      context: checkToken(),
    });
  }

  //metodo para obtener toda la info del perfil del usuario logado
  getAllMeProfile() {
    return this.http.get<Profile>(`${this.apiUrl}/api/v1/me/profile`, {
      context: checkToken(),
    });
  }
}
