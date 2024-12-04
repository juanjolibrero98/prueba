import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { ReactiveFormsModule } from "@angular/forms";
import { RegisterFormComponent } from "./register-form.component";
import { Router } from "@angular/router";
// podemos usar 'f' en el describe - 'fdescribe', que significa focus, y es para hacer foco a esa prueba, omitiendo las demas, para cuando queramos hacer una prueba unica y no perder tiempo en las otras

describe('Component: RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;//es un ambiente creado para poder interactuar con el componente
  let registerFormComponent: RegisterFormComponent;
  let httpController: HttpTestingController;
  let router: jasmine.SpyObj<Router>;
  
  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);//espiamos el metodo navigate del router

    await TestBed.configureTestingModule({
      declarations: [RegisterFormComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [RegisterFormComponent, {provide: Router, useValue: routerSpy} ]
    }).compileComponents();//metodo asincrono que acaba compilando el componente, en resumen, creamos un modulo pequeño para poder lanzar nuestras pruebas
    registerFormComponent = TestBed.inject(RegisterFormComponent);
    httpController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormComponent);//aqui recuperamos el fixture diciendole que vamos a trabajar sobre este fixture, creando el componente userTable
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    component = fixture.componentInstance;
    fixture.detectChanges();//ciclo de vida de angular
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test for register method, see the status', () => {
    component.register();
    expect(component.status).toEqual('init');//comprobamos el estado del envio del link
    component.status = 'success';
    expect(component.status).toEqual('success');
  });

  it('should test for validateUser method, see the status', () => {
    component.validateUser();
    expect(component.status).toEqual('init');//comprobamos el estado del envio del link
    component.status = 'loading';
    expect(component.status).toEqual('loading');
  });

})

