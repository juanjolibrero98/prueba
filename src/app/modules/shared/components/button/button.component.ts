import { Component, Input } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { COLORS, Colors } from '@models/colors.model';

@Component({
  selector: 'app-btn',
  templateUrl: './button.component.html',
})
export class ButtonComponent {

  @Input() disabled = false;
  @Input() loading = false;
  @Input() typeBtn: 'reset' | 'submit' | 'button' = 'button';
  @Input() color: Colors = 'primary';

  faSpinner = faSpinner;

  mapColors = COLORS;//array con los colores y estilos por defecto

  constructor() {}

  get colors() {
    const colors = this.mapColors[this.color];
    return colors ? colors : {};
  }
}