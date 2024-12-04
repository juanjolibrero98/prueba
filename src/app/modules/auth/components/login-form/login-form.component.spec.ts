import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { ReactiveFormsModule } from "@angular/forms";
import { LoginFormComponent } from "./login-form.component";
import { ActivatedRoute, Router } from "@angular/router";
// podemos usar 'f' en el describe - 'fdescribe', que significa focus, y es para hacer foco a esa prueba, omitiendo las demas, para cuando queramos hacer una prueba unica y no perder tiempo en las otras
/*
describe('Component: LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;//es un ambiente creado para poder interactuar con el componente
  let loginFormComponent: LoginFormComponent;
  let httpController: HttpTestingController;
  let router: jasmine.SpyObj<Router>;
  let activatedRoute: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);//espiamos el metodo navigate del router
    const spy = jasmine.createSpyObj('ActivatedRoute', ['subscribe']);//espia que creamos para indicar que solo queremos ver este metodo del servicio

    await TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [LoginFormComponent,  {provide: Router, useValue: routerSpy}, {provide: ActivatedRoute, useValue: spy} ]
    }).compileComponents();//metodo asincrono que acaba compilando el componente, en resumen, creamos un modulo pequeño para poder lanzar nuestras pruebas
    loginFormComponent = TestBed.inject(LoginFormComponent);
    httpController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);//aqui recuperamos el fixture diciendole que vamos a trabajar sobre este fixture, creando el componente userTable
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    activatedRoute = TestBed.inject(ActivatedRoute) as jasmine.SpyObj<ActivatedRoute>;
    component = fixture.componentInstance;
    fixture.detectChanges();//ciclo de vida de angular
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test for sendLink method, see the status', () => {
    component.doLogin();
    expect(component.status).toEqual('init');//comprobamos el estado del envio del link
  });

})*/

