import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  constructor(
    private authService: AuthService
  ) {}

  //se llama a getProfile aqui, para guardar los datos del user en la variable y que pueda acceder a el desde cualquier
  //zona de la ap privada, ya que desde aquí es el modulo principal de la app privada
  ngOnInit() {
    this.authService.getProfile()
    .subscribe(() => {
      console.log('get profile');
    });
  }
}
