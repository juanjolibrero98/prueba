import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './components/button/button.component';
import { CardColorComponent } from './components/card-color/card-color.component';

@NgModule({
  declarations: [ButtonComponent, CardColorComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ButtonComponent, CardColorComponent],//para que pueda usar estos componentes en las otras parte de la app, modulos distintos
})
export class SharedModule {}
