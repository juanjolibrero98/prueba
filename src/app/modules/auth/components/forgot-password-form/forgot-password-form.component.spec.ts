import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { ForgotPasswordFormComponent } from "./forgot-password-form.component";
import { ReactiveFormsModule } from "@angular/forms";
// podemos usar 'f' en el describe - 'fdescribe', que significa focus, y es para hacer foco a esa prueba, omitiendo las demas, para cuando queramos hacer una prueba unica y no perder tiempo en las otras

describe('Component: ForgotPasswordFormComponent', () => {
  let component: ForgotPasswordFormComponent;
  let fixture: ComponentFixture<ForgotPasswordFormComponent>;//es un ambiente creado para poder interactuar con el componente
  let forgotPasswordFormComponent: ForgotPasswordFormComponent;
  let httpController: HttpTestingController;
  
  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [ForgotPasswordFormComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [ForgotPasswordFormComponent ]
    }).compileComponents();//metodo asincrono que acaba compilando el componente, en resumen, creamos un modulo pequeño para poder lanzar nuestras pruebas
    forgotPasswordFormComponent = TestBed.inject(ForgotPasswordFormComponent);
    httpController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordFormComponent);//aqui recuperamos el fixture diciendole que vamos a trabajar sobre este fixture, creando el componente userTable
    component = fixture.componentInstance;
    fixture.detectChanges();//ciclo de vida de angular
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test for sendLink method, see the status', () => {
    component.sendLink();
    expect(component.status).toEqual('init');//comprobamos el estado del envio del link
  });

})

