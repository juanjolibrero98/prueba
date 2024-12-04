import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { checkToken } from '@interceptors/token.interceptor';
import { Profile, User } from '@models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  //<User[]> -> retorna un array de usuarios
  //{ context: checkToken() } es para enviar el token en la peticion con el interceptor
  getUsers() {
    return this.http.get<User[]>(`${this.apiUrl}/api/v1/users`, {
      context: checkToken(),
    });
  }

  updateInfoUser(id: User['id'], email: string, name: string, avatar: string){
    return this.http.put<Profile>(`${this.apiUrl}/api/v1/users/${id}`, {
      email,
      name,
      avatar
    }, {
      context: checkToken(),
    });
  }
}
