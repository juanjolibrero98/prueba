import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { ButtonComponent } from "./button.component";
// podemos usar 'f' en el describe - 'fdescribe', que significa focus, y es para hacer foco a esa prueba, omitiendo las demas, para cuando queramos hacer una prueba unica y no perder tiempo en las otras

describe('Component: ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;//es un ambiente creado para poder interactuar con el componente
  let buttonComponent: ButtonComponent;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
      imports: [HttpClientTestingModule],
      providers: [ButtonComponent]
    }).compileComponents();//metodo asincrono que acaba compilando el componente, en resumen, creamos un modulo pequeño para poder lanzar nuestras pruebas
    buttonComponent = TestBed.inject(ButtonComponent);
    httpController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);//aqui recuperamos el fixture diciendole que vamos a trabajar sobre este fixture, creando el componente userTable
    component = fixture.componentInstance;
    component.color = 'violet';//le pasamos al @input el valor de color
    fixture.detectChanges();//ciclo de vida de angular
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should the color be "violet"', () => {
    component.color = 'violet';
    expect(component.color).toEqual('violet');
  })
  
})