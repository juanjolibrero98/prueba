/* tslint:disable:no-unused-variable */
//ng test  para correr las pruebas
//ng test --no-watch --code-coverage      para generar un informe de cobertura(lo podemos encontrar el html descargado dentro de la carpeta 'coverage' en la raiz del proyecto

import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { environment } from '../../environments/environment';
import { CardsService } from './cards.service';
import { Card, CreateCardDto, UpdateCardDto } from '@models/card.model';
import { List } from '@models/list.model';

describe('Service: Cards', () => {
  let cardsService: CardsService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CardsService]
    });
    cardsService = TestBed.inject(CardsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(()  => {//corre un pedazo de codigo despues de cada prueba, entonces como debemos verificar cada prueba, lo metemos aqui y nos ahorramos codigo
    httpController.verify();//verifica y monta el mock
  })

  it('should be create', () => {
    expect(cardsService).toBeTruthy();
  });

  //prueba para Post
  //prueba que involucra una peticion Http
  describe('test for create', () =>{
    it('should return a new Cards', (doneFn) =>{
      //arrange
      const mockList: List = {
        id: '1',
        title: 'Casa',
        position: 5,
        cards: [],
        showCardForm: true//estado para saber si mostrar boton crear nuevo card en cada lista
      };
      const mockData: Card = {//creamos un caso de prueba de lo que nos devolveria la peticion
        id: '1',
        title: 'Hacer la compra',
        description: 'Ir al supermercado',
        position: 1,
        list: mockList
      };
      const dto: CreateCardDto = {//dto de la nueva lista
        title: 'Comprar comida',
        position: 2,
        description: 'Lista compra',
        listId: '1',
        boardId: '1'
      }
      //Act
      cardsService.create({...dto}).subscribe((data) => {//{...dto} para prevenir problemas de mutacion - (principalmente para objetos o arrays)
        //Assert
        expect(data).toEqual(mockData);//aqui hacemos las pruebas necesarias, en este caso comparamos que la lista creada sea igual al mock
        doneFn();
      });

      //http config
      const url = `${environment.API_URL}/api/v1/cards`;
      const req = httpController.expectOne(url);//esto hace que cuando haga la peticio en vez de traer los datos reales, lo reemplace por el mock creado
      req.flush(mockData);//reemplaza la info
      expect(req.request.body).toEqual(dto);//comparamos para comprobar que el body enviado sea igual que el dto que se le pasa, para que no puedan modificar en el service este dato(prevenir errores)
      expect(req.request.method).toEqual('POST');//comprobamos que sea el mismo metodo
      //se puede comprobar que si ponemos en el service put en vez de post saltara el error al enviar el ng test
      //httpController.verify();
    });
  });

  //prueba para Put
  //prueba que involucra una peticion Http
  describe('test for UpdateCard', () =>{
    it('should update position and list of Card', (doneFn) =>{
      //arrange
      const mockList: List = {
        id: '1',
        title: 'Casa',
        position: 5,
        cards: [],
        showCardForm: true//estado para saber si mostrar boton crear nuevo card en cada lista
      };
      const mockData: Card = {//creamos un caso de prueba de lo que nos devolveria la peticion
        id: '1',
        title: 'Hacer la compra',
        description: 'Ir al supermercado',
        position: 1,
        list: mockList
      };
      const dto: UpdateCardDto = {//la info que vamos a actualizar
        title: 'Lista de la compra',
        description: 'Lista creada para comprar',
        position: 1,
        listId: 1,
        boardId: '1'
      }
      const cardId = '1';
      //Act
      cardsService.update(cardId, {...dto}).subscribe((data) => {//{...dto} para prevenir problemas de mutacion - (principalmente para objetos o arrays)
        //Assert
        expect(data).toEqual(mockData);//aqui hacemos las pruebas necesarias
        doneFn();
      });

      //http config
      const url = `${environment.API_URL}/api/v1/cards/${cardId}`;
      const req = httpController.expectOne(url);//esto hace que cuando haga la peticio en vez de traer los datos reales, lo reemplace por el mock creado
      expect(req.request.method).toEqual('PUT');//comprobamos que el metodo sea PUT
      expect(req.request.body).toEqual(dto);//comprobamos que en el body enviamos el dto
      req.flush(mockData);//reemplaza la info
      //httpController.verify();
    });
  });

});
