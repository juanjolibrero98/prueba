/* tslint:disable:no-unused-variable */
//ng test  para correr las pruebas
//ng test --no-watch --code-coverage      para generar un informe de cobertura(lo podemos encontrar el html descargado dentro de la carpeta 'coverage' en la raiz del proyecto

import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { environment } from '../../environments/environment';
import { Card } from '@models/card.model';
import { BoardsService } from './boards.service';
import { Board } from '@models/board.model';
import { Colors } from '@models/colors.model';
import { List } from '@models/list.model';
import { BehaviorSubject } from 'rxjs';

describe('Service: Boards', () => {
  let boardsService: BoardsService;
  let httpController: HttpTestingController;
  let success: Colors = 'success';
  let danger: Colors = 'danger';
  let green: Colors = 'green';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BoardsService]
    });
    boardsService = TestBed.inject(BoardsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(()  => {//corre un pedazo de codigo despues de cada prueba, entonces como debemos verificar cada prueba, lo metemos aqui y nos ahorramos codigo
    httpController.verify();//verifica y monta el mock
  })

  it('should be create', () => {
    expect(boardsService).toBeTruthy();
  });

  //prueba para Get
  //prueba que involucra una peticion Http
  describe('test for getBoard', () =>{
    it('should return a Board', (doneFn) =>{
      //arrange
      const mockData: Board = {//creamos un caso de prueba de lo que nos devolveria la peticion
        id: '1',
        title: 'Mi espacio',
        backgroundColor: success,
        members: [],
        lists: [],
        cards: []
      };
      //Act
      boardsService.getBoard(mockData.id).subscribe((data) => {
        //Assert
        expect(data).toEqual(mockData);//aqui hacemos las pruebas necesarias, en este caso comparamos que la data sea igual que el usuario mock, intentando saber si el user logado es el mismo
        doneFn();
      });

      //http config
      const url = `${environment.API_URL}/api/v1/boards/${mockData.id}`;
      const req = httpController.expectOne(url);//esto hace que cuando haga la peticio en vez de traer los datos reales, lo reemplace por el mock creado
      req.flush(mockData);//reemplaza la info
      expect(req.request.method).toEqual('GET');//comprobamos que sea el mismo metodo
      //httpController.verify();
    });
  });

  //prueba para Post
  //prueba que involucra una peticion Http
  describe('test for create', () =>{
    it('should return a new Boards', (doneFn) =>{
      //arrange
      const mockData: Board = {//creamos un caso de prueba de lo que nos devolveria la peticion
        id: '2',
        title: 'Mi espacio de trabajo',
        backgroundColor: danger,
        members: [],
        lists: [],
        cards: []
      };
      const dto: any = {//dto de la nueva lista
        title: 'Comprar regalos',
        backgroundColor: green
      }
      //Act
      boardsService.createBoard(dto.title, dto.backgroundColor).subscribe((data) => {//{...dto} para prevenir problemas de mutacion - (principalmente para objetos o arrays)
        //Assert
        expect(data).toEqual(mockData);//aqui hacemos las pruebas necesarias, en este caso comparamos que la lista creada sea igual al mock
        doneFn();
      });

      //http config
      const url = `${environment.API_URL}/api/v1/boards`;
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
  describe('test for updateBoard', () =>{
    it('should update board', (doneFn) =>{
      //arrange
      const mockData: Board = {//creamos un caso de prueba de lo que nos devolveria la peticion
        id: '3',
        title: 'Mi espacio de ideas',
        backgroundColor: 'lightList',
        members: [],
        lists: [],
        cards: []
      };
      const dto: any = {//dto de la nueva lista
        title: 'Comprar regalos',
        backgroundColor: danger
      }
      const boardId = mockData.id;
      //Act
      boardsService.updateBoard(boardId, dto.title, dto.backgroundColor).subscribe((data) => {//{...dto} para prevenir problemas de mutacion - (principalmente para objetos o arrays)
        //Assert
        expect(data).toEqual(mockData);//aqui hacemos las pruebas necesarias
        doneFn();
      });

      //http config
      const url = `${environment.API_URL}/api/v1/boards/${boardId}`;
      const req = httpController.expectOne(url);//esto hace que cuando haga la peticio en vez de traer los datos reales, lo reemplace por el mock creado
      expect(req.request.method).toEqual('PUT');//comprobamos que el metodo sea PUT
      expect(req.request.body).toEqual(dto);//comprobamos que en el body enviamos el dto
      req.flush(mockData);//reemplaza la info
      //httpController.verify();
    });
  });

  //prueba para comprobar la posicion de la carta, la ejecutamos para comprbar si nos devuelve la posicion 0
  describe('test for getPosition', () =>{

    it('should return list[] with position', () => {
      const mockList: List = {
        id: '1',
        title: 'Casa',
        position: 5,
        cards: [],
        showCardForm: true//estado para saber si mostrar boton crear nuevo card en cada lista
      };
      const mockData: Card[] = [//creamos un caso de prueba de lo que nos devolveria la peticion
        {
          id: '1',
          title: 'Hacer la compra',
          description: 'Ir al supermercado',
          position: 1,
          list: mockList
        }
      ];
      expect(boardsService.getPosition(mockData, 1)).toBe(65535);//compara que el return que nos de sea igual al 0 para saber que se encuentra en esa posicion
    });
  });

  //prueba para recuperar el background color del board y guardarlo en la variable
  describe('test for setBackgroundColor', () =>{

    it('should change the BackgroundColor', () => {
      let color: Colors = 'primary';
      const colorBehavoir = new BehaviorSubject<Colors>(color)
      expect(boardsService.setBackgroundColor(color));
      expect(boardsService.getBackgroundColor().value).toBe(colorBehavoir.value);//compara que el return que nos de sea el mismo backgroundColor
    });
  });

  //prueba para calcular donde se debe añadir una nueva card o una nueva lista
  describe('test for getPositionNewList', () =>{

    it('should for calculate the getPositionNewList', () => {
      const mockList: List [] = [
        { id: '1',
          title: 'Casa',
          position: 5,
          cards: [],
          showCardForm: true//estado para saber si mostrar boton crear nuevo card en cada lista
        }
      ];
      expect(boardsService.getPositionNewCardOrList(mockList)).toBe(65540);//compara que el return que nos de sea igual al 0 para saber que se encuentra en esa posicion
    });
  });

  //prueba como el anterior pero con Card
  describe('test for getPositionNewCard', () =>{

    it('should for calculate the getPositionNewCard', () => {
      const mockList: List = {
        id: '1',
        title: 'Casa',
        position: 5,
        cards: [],
        showCardForm: true//estado para saber si mostrar boton crear nuevo card en cada lista
      };
      const mockData: Card[] = [//creamos un caso de prueba de lo que nos devolveria la peticion
        {
          id: '1',
          title: 'Hacer la compra',
          description: 'Ir al supermercado',
          position: 1,
          list: mockList
        }
      ];
      expect(boardsService.getPositionNewCardOrList(mockData)).toBe(65536);//compara que el return que nos de sea igual al 0 para saber que se encuentra en esa posicion
    });
  });
});
