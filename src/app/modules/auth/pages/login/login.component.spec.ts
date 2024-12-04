import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginComponent } from "./login.component";
// podemos usar 'f' en el describe - 'fdescribe', que significa focus, y es para hacer foco a esa prueba, omitiendo las demas, para cuando queramos hacer una prueba unica y no perder tiempo en las otras

describe('Component: LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;//es un ambiente creado para poder interactuar con el componente
  let loginComponent: LoginComponent;
  let httpController: HttpTestingController;
  let router: jasmine.SpyObj<Router>;
  
  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);//espiamos el metodo navigate del router

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [LoginComponent, {provide: Router, useValue: routerSpy} ]
    }).compileComponents();//metodo asincrono que acaba compilando el componente, en resumen, creamos un modulo pequeño para poder lanzar nuestras pruebas
    loginComponent = TestBed.inject(LoginComponent);
    httpController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);//aqui recuperamos el fixture diciendole que vamos a trabajar sobre este fixture, creando el componente userTable
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    component = fixture.componentInstance;
    fixture.detectChanges();//ciclo de vida de angular
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

})

