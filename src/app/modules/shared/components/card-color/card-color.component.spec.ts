import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { CardColorComponent } from "./card-color.component";
// podemos usar 'f' en el describe - 'fdescribe', que significa focus, y es para hacer foco a esa prueba, omitiendo las demas, para cuando queramos hacer una prueba unica y no perder tiempo en las otras

describe('Component: CardColorComponent', () => {
  let component: CardColorComponent;
  let fixture: ComponentFixture<CardColorComponent>;//es un ambiente creado para poder interactuar con el componente
  let cardColorComponent: CardColorComponent;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardColorComponent],
      imports: [HttpClientTestingModule],
      providers: [CardColorComponent]
    }).compileComponents();//metodo asincrono que acaba compilando el componente, en resumen, creamos un modulo pequeño para poder lanzar nuestras pruebas
    cardColorComponent = TestBed.inject(CardColorComponent);
    httpController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardColorComponent);//aqui recuperamos el fixture diciendole que vamos a trabajar sobre este fixture, creando el componente userTable
    component = fixture.componentInstance;
    component.color = 'violet';//le pasamos al @input el valor de color
    fixture.detectChanges();//ciclo de vida de angular
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should the color be "primary"', () => {
    component.color = 'primary';
    let primary =  {
      'bg-primary-700': true,
      'hover:bg-primary-800': true,
      'focus:ring-primary-300': true,
      'text-white': true,
    };

    expect(component.colors).toEqual(primary);//comprobamos que funcione la comparacion del array de colores
  })
  
})