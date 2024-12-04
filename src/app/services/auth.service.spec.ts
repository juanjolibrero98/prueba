/* tslint:disable:no-unused-variable */
//ng test  para correr las pruebas
//ng test --no-watch --code-coverage      para generar un informe de cobertura(lo podemos encontrar el html descargado dentro de la carpeta 'coverage' en la raiz del proyecto

import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '@interceptors/token.interceptor';
import { AuthService } from './auth.service';

describe('Service: Auth', () => {
  let authService: AuthService;
  let tokenService: TokenService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        TokenService,
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }//incluyo el interceptor como parte de este modulo, de manera que cualquier peticion que hagamos aqui será interceptada
      ]
    });
    authService = TestBed.inject(AuthService);
    tokenService = TestBed.inject(TokenService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(()  => {//corre un pedazo de codigo despues de cada prueba, entonces como debemos verificar cada prueba, lo metemos aqui y nos ahorramos codigo
    httpController.verify();//verifica y monta el mock
  })

  it('should be create', () => {
    expect(authService).toBeTruthy();
  });

  describe('tests for login', () => {
    it('Should return a token', (doneFn) => {
      //arrange
      const mockData: any = {
        access_token: '123'
      };
      const email = 'a@a.es';
      const password = '12345';
      //Act
      authService.login(email, password).subscribe((data) => {
        //Assert
        expect(data).toEqual(mockData);
        doneFn();
      });

      //http config
      const url = `${environment.API_URL}/api/v1/auth/login`;
      const req = httpController.expectOne(url);//esto hace que cuando haga la peticio en vez de traer los datos reales, lo reemplace por el mock creado
      req.flush(mockData);//reemplaza la info
    })

    it('Should call to saveToken', (doneFn) => {
      //arrange
      const mockData: any = {
        access_token: '123'
      };
      const email = 'a@a.es';
      const password = '12345';
      spyOn(tokenService, 'saveToken').and.callThrough();//le digo que espie ese metodo pero que no lo llame ya que no retornara nada
      //Act
      authService.login(email, password).subscribe((data) => {
        //Assert
        expect(data).toEqual(mockData);
        expect(tokenService.saveToken).toHaveBeenCalledTimes(1);//expiamos que se llamase solo 1 vez
        expect(tokenService.saveToken).toHaveBeenCalledOnceWith('123');//expiamos que el argumento pasado y guardado en el token sea ese
        doneFn();
      });

      //http config
      const url = `${environment.API_URL}/api/v1/auth/login`;
      const req = httpController.expectOne(url);//esto hace que cuando haga la peticio en vez de traer los datos reales, lo reemplace por el mock creado
      req.flush(mockData);//reemplaza la info
    })
  })
});
