/* tslint:disable:no-unused-variable */
//ng test  para correr las pruebas
//ng test --no-watch --code-coverage      para generar un informe de cobertura(lo podemos encontrar el html descargado dentro de la carpeta 'coverage' en la raiz del proyecto

import { TestBed, waitForAsync } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { TokenService } from './token.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '@interceptors/token.interceptor';

describe('Service: Token', () => {
  let tokenService: TokenService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TokenService,
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }//incluyo el interceptor como parte de este modulo, de manera que cualquier peticion que hagamos aqui será interceptada
      ]
    });
    tokenService = TestBed.inject(TokenService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(()  => {//corre un pedazo de codigo despues de cada prueba, entonces como debemos verificar cada prueba, lo metemos aqui y nos ahorramos codigo
    httpController.verify();//verifica y monta el mock
  })

  it('should be create', () => {
    expect(tokenService).toBeTruthy();
  });

  //prueba para Get
  //prueba que involucra una peticion Http
  describe('test for getToken', () =>{
    it('should return a token', waitForAsync(() =>{
      //arrange
      spyOn(tokenService, 'getToken').and.returnValue('123');//se usa para decirle que solo quiero espiar esta parte del tokenService y que devuelva el valor del token que quiero
    }));
  });

});
