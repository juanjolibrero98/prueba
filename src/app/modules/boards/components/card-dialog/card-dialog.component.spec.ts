import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { CardDialogComponent } from "./card-dialog.component";
// podemos usar 'f' en el describe - 'fdescribe', que significa focus, y es para hacer foco a esa prueba, omitiendo las demas, para cuando queramos hacer una prueba unica y no perder tiempo en las otras
/*
describe('Component: CardDialogComponent', () => {
  let component: CardDialogComponent;
  let fixture: ComponentFixture<CardDialogComponent>;//es un ambiente creado para poder interactuar con el componente
  let cardDialogComponent: CardDialogComponent;
  let httpController: HttpTestingController;
  
  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [CardDialogComponent],
      imports: [HttpClientTestingModule],
      providers: [CardDialogComponent ]
    }).compileComponents();//metodo asincrono que acaba compilando el componente, en resumen, creamos un modulo pequeño para poder lanzar nuestras pruebas
    cardDialogComponent = TestBed.inject(CardDialogComponent);
    httpController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDialogComponent);//aqui recuperamos el fixture diciendole que vamos a trabajar sobre este fixture, creando el componente userTable
    component = fixture.componentInstance;
    fixture.detectChanges();//ciclo de vida de angular
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  
})
*/
