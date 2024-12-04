import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { BoardsComponent } from "./boards.component";
import { MeService } from "@services/me.service";
// podemos usar 'f' en el describe - 'fdescribe', que significa focus, y es para hacer foco a esa prueba, omitiendo las demas, para cuando queramos hacer una prueba unica y no perder tiempo en las otras
/*
describe('Component: BoardsComponent', () => {
  let component: BoardsComponent;
  let fixture: ComponentFixture<BoardsComponent>;//es un ambiente creado para poder interactuar con el componente
  let boardsComponent: BoardsComponent;
  let httpController: HttpTestingController;
  let meService: MeService;

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [BoardsComponent],
      imports: [HttpClientTestingModule],
      providers: [BoardsComponent]
    }).compileComponents();//metodo asincrono que acaba compilando el componente, en resumen, creamos un modulo pequeño para poder lanzar nuestras pruebas
    boardsComponent = TestBed.inject(BoardsComponent);
    httpController = TestBed.inject(HttpTestingController);
    meService = TestBed.inject(MeService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsComponent);//aqui recuperamos el fixture diciendole que vamos a trabajar sobre este fixture, creando el componente userTable
    component = fixture.componentInstance;
    fixture.detectChanges();//ciclo de vida de angular
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a getMeBoards', () => {
    component.getMeBoards();
    // TODO:
    expect(component.boards).toBeTruthy();//devuelve el board lleno
  });
  
})*/

