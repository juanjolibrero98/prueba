import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { NavbarComponent } from "./navbar.component";
import { Router } from "@angular/router";
// podemos usar 'f' en el describe - 'fdescribe', que significa focus, y es para hacer foco a esa prueba, omitiendo las demas, para cuando queramos hacer una prueba unica y no perder tiempo en las otras

describe('Component: NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;//es un ambiente creado para poder interactuar con el componente
  let navbarComponent: NavbarComponent;
  let httpController: HttpTestingController;
  let router: jasmine.SpyObj<Router>;
  
  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);//espiamos el metodo navigate del router

    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [HttpClientTestingModule],
      providers: [NavbarComponent , {provide: Router, useValue: routerSpy}]
    }).compileComponents();//metodo asincrono que acaba compilando el componente, en resumen, creamos un modulo pequeño para poder lanzar nuestras pruebas
    navbarComponent = TestBed.inject(NavbarComponent);
    httpController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);//aqui recuperamos el fixture diciendole que vamos a trabajar sobre este fixture, creando el componente userTable
    component = fixture.componentInstance;
    fixture.detectChanges();//ciclo de vida de angular
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout redirect to "/"', () => {
    expect(component.logout).toMatch('');//uso de router para ir al /
  });

  it('should return a boolean to close overlay', () => {
    expect(component.isOpenOverlayCreateBoard).toBeFalse();//comprobamos valor del overlay
    component.close(true);
    // TODO:
    expect(component.isOpenOverlayCreateBoard).toBeTrue();
    component.close(false);
    expect(component.isOpenOverlayCreateBoard).toBeFalse();
  });

  it('should return a getMeBoards', () => {
    component.getMeBoards();
    // TODO:
    expect(component.boards).toBeTruthy();//devuelve el board lleno
  });
  
})

