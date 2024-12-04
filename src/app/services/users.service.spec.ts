/* tslint:disable:no-unused-variable */
//ng test  para correr las pruebas
//ng test --no-watch --code-coverage      para generar un informe de cobertura(lo podemos encontrar el html descargado dentro de la carpeta 'coverage' en la raiz del proyecto

import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';

import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { UpdateProfile, User } from '@models/user.model';
import { environment } from '../../environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '@interceptors/token.interceptor';
import { TokenService } from './token.service';

describe('Service: Users', () => {
  let userService: UsersService;
  let httpController: HttpTestingController;
  let tokenService: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UsersService,
        TokenService,
        //{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }//incluyo el interceptor como parte de este modulo, de manera que cualquier peticion que hagamos aqui será interceptada
      ]
    });
    userService = TestBed.inject(UsersService);//inyeccion de dependencias
    httpController = TestBed.inject(HttpTestingController);
    //tokenService = TestBed.inject(TokenService);
  });

  afterEach(()  => {//corre un pedazo de codigo despues de cada prueba, entonces como debemos verificar cada prueba, lo metemos aqui y nos ahorramos codigo
    httpController.verify();//verifica y monta el mock
  })

  it('should be create', () => {
    expect(userService).toBeTruthy();
  });

  //prueba para Get
  //prueba que involucra una peticion Http
  describe('test for getUsers', () =>{
    it('should return a user list', (doneFn) =>{
      //arrange
      const mockData: User[] = [//creamos un caso de prueba de lo que nos devolveria la peticion
        {
          id: '1',
          name: 'Pepe',
          email: 'a@a.es',
          avatar: ''
        }
      ];
      //spyOn(tokenService, 'getToken').and.returnValue('123');//se usa para decirle que solo quiero espiar esta parte del tokenService y que devuelva el valor del token que quiero
      //Act
      userService.getUsers().subscribe((data) => {
        //Assert
        expect(data.length).toEqual(mockData.length);//aqui hacemos las pruebas necesarias, en este caso comparamos que la data tenga la misma length
        doneFn();
      });

      //http config
      const url = `${environment.API_URL}/api/v1/users`;
      const req = httpController.expectOne(url);//esto hace que cuando haga la peticio en vez de traer los datos reales, lo reemplace por el mock creado
      const headers = req.request.headers;//obtenemos los headers
      //expect(headers.get('Authorization')).toEqual(`Bearer 123`);//obtenemos el token mockeado
      req.flush(mockData);//reemplaza la info
      //httpController.verify();
    });
  });


  //prueba para Put
  //prueba que involucra una peticion Http
  describe('test for updateInfoUser', () =>{
    it('should update a user info', (doneFn) =>{
      //arrange
      const mockData: User[] = [//creamos un caso de prueba de lo que nos devolveria la peticion
        {
          id: '1',
          name: 'Juan',
          email: 'b@b.es',
          avatar: ''
        }
      ];
      const dto: UpdateProfile = {//la info que vamos a actualizar
        email: 'c@c.es',
        name: 'Juan',
        avatar: ''
      }
      const userId = '1';
      //Act
      userService.updateInfoUser(userId, dto.email, dto.name, dto.avatar).subscribe((data) => {
        //Assert
        expect(data.creationAt != null && data.creationAt != '');//aqui hacemos las pruebas necesariash
        doneFn();
      });

      //http config
      const url = `${environment.API_URL}/api/v1/users/${userId}`;
      const req = httpController.expectOne(url);//esto hace que cuando haga la peticio en vez de traer los datos reales, lo reemplace por el mock creado
      expect(req.request.method).toEqual('PUT');//comprobamos que el metodo sea PUT
      expect(req.request.body).toEqual(dto);//comprobamos que en el body enviamos el dto
      req.flush(mockData);//reemplaza la info
      //httpController.verify();
    });
  });

});
