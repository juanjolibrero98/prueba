import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { BoardDialogComponent } from "./board-dialog.component";
// podemos usar 'f' en el describe - 'fdescribe', que significa focus, y es para hacer foco a esa prueba, omitiendo las demas, para cuando queramos hacer una prueba unica y no perder tiempo en las otras
/*
describe('Component: BoardDialogComponent', () => {
  let component: BoardDialogComponent;
  let fixture: ComponentFixture<BoardDialogComponent>;//es un ambiente creado para poder interactuar con el componente
  let boardDialogComponent: BoardDialogComponent;
  let httpController: HttpTestingController;
  
  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [BoardDialogComponent],
      imports: [HttpClientTestingModule],
      providers: [BoardDialogComponent ]
    }).compileComponents();//metodo asincrono que acaba compilando el componente, en resumen, creamos un modulo pequeño para poder lanzar nuestras pruebas
    boardDialogComponent = TestBed.inject(BoardDialogComponent);
    httpController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardDialogComponent);//aqui recuperamos el fixture diciendole que vamos a trabajar sobre este fixture, creando el componente userTable
    component = fixture.componentInstance;
    fixture.detectChanges();//ciclo de vida de angular
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  
})*/

