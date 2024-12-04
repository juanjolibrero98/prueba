import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { Router } from "@angular/router";
import { BoardComponent } from "./board.component";
import { BoardsService } from "@services/boards.service";
import { Colors } from "../../../../models/colors.model";
import { Dialog } from "@angular/cdk/dialog";
import { Overlay } from "@angular/cdk/overlay";
import { InjectionToken } from "@angular/core";
// podemos usar 'f' en el describe - 'fdescribe', que significa focus, y es para hacer foco a esa prueba, omitiendo las demas, para cuando queramos hacer una prueba unica y no perder tiempo en las otras
/*
describe('Component: BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;//es un ambiente creado para poder interactuar con el componente
  let boardComponent: BoardComponent;
  let httpController: HttpTestingController;
  let router: jasmine.SpyObj<Router>;
  let boardsService: BoardsService;
  let sky: Colors = "sky";

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);//espiamos el metodo navigate del router

    await TestBed.configureTestingModule({
      declarations: [BoardComponent],
      imports: [HttpClientTestingModule],
      providers: [BoardComponent , {provide: Router, useValue: routerSpy}]
    }).compileComponents();//metodo asincrono que acaba compilando el componente, en resumen, creamos un modulo pequeño para poder lanzar nuestras pruebas
    boardComponent = TestBed.inject(BoardComponent);
    httpController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);//aqui recuperamos el fixture diciendole que vamos a trabajar sobre este fixture, creando el componente userTable
    component = fixture.componentInstance;
    fixture.detectChanges();//ciclo de vida de angular
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return backgroundColor - ngOnDestroy', () => {
    component.ngOnDestroy();
    expect(boardsService.backgroundColorBoard$.getValue).toEqual(sky);
  });

  
  
})
*/
