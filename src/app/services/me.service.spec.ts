/* tslint:disable:no-unused-variable */
//ng test  para correr las pruebas
//ng test --no-watch --code-coverage      para generar un informe de cobertura(lo podemos encontrar el html descargado dentro de la carpeta 'coverage' en la raiz del proyecto

import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { Profile, User } from '@models/user.model';
import { environment } from '../../environments/environment';
import { MeService } from './me.service';
import { Board } from '@models/board.model';
import { Colors } from "../models/colors.model";

describe('Service: Me', () => {
  let meService: MeService;
  let httpController: HttpTestingController;
  let success: Colors = 'success';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MeService]
    });
    meService = TestBed.inject(MeService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(()  => {//corre un pedazo de codigo despues de cada prueba, entonces como debemos verificar cada prueba, lo metemos aqui y nos ahorramos codigo
    httpController.verify();//verifica y monta el mock
  })

  it('should be create', () => {
    expect(meService).toBeTruthy();
  });

  //prueba para Get
  //prueba que involucra una peticion Http
  describe('test for getMeProfile', () =>{
    it('should return a user profile', (doneFn) =>{
      //arrange
      const mockData: User = {//creamos un caso de prueba de lo que nos devolveria la peticion
        id: '1',
        name: 'Pepe',
        email: 'a@a.es',
        avatar: ''
      };
      //Act
      meService.getMeProfile().subscribe((data) => {
        //Assert
        expect(data).toEqual(mockData);//aqui hacemos las pruebas necesarias, en este caso comparamos que la data sea igual que el usuario mock, intentando saber si el user logado es el mismo
        doneFn();
      });

      //http config
      const url = `${environment.API_URL}/api/v1/me/profile`;
      const req = httpController.expectOne(url);//esto hace que cuando haga la peticio en vez de traer los datos reales, lo reemplace por el mock creado
      req.flush(mockData);//reemplaza la info
      //httpController.verify();
    });
  });

  //prueba Get para recibir los Boards del usuario
  describe('test for getMeBoards', () =>{
    it('should return Board[] of user logado', (doneFn) =>{
      //arrange
      const mockData: Board[] = [//creamos un caso de prueba de lo que nos devolveria la peticion
        { 
          id: '1',
          title: 'Tareas',
          backgroundColor: success,
          members: [],
          lists: [],
          cards: []
        }
      ];
      //Act
      meService.getMeBoards().subscribe((data) => {
        //Assert
        expect(data[0].backgroundColor).toEqual(mockData[0].backgroundColor);//aqui hacemos las pruebas necesarias, en este caso comprobamos que tenga el mismo color de fondo
        doneFn();
      });

      //http config
      const url = `${environment.API_URL}/api/v1/me/boards`;
      const req = httpController.expectOne(url);//esto hace que cuando haga la peticio en vez de traer los datos reales, lo reemplace por el mock creado
      req.flush(mockData);//reemplaza la info
      //httpController.verify();
    });
  });

  //prueba Get para recibir toda la info del user logado
  describe('test for getAllMeProfile', () =>{
    it('should return all info of user logado', (doneFn) =>{
      //arrange
      const mockData: Profile = {
        creationAt: 'ok',
        updatedAt: '',
        id: '1',
        name: 'Pepe',
        email: 'a@a.es',
        avatar: ''
      };
      //Act
      meService.getAllMeProfile().subscribe((data) => {
        //Assert
        expect(data != null && expect(data.name).toEqual(mockData.name));//aqui hacemos las pruebas necesarias, en este caso comprobamos que no llege nulo y sea el mismo usuario del mock
        doneFn();
      });

      //http config
      const url = `${environment.API_URL}/api/v1/me/profile`;
      const req = httpController.expectOne(url);//esto hace que cuando haga la peticio en vez de traer los datos reales, lo reemplace por el mock creado
      req.flush(mockData);//reemplaza la info
      //httpController.verify();
    });
  });
  
});
