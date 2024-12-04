/* tslint:disable:no-unused-variable */
//ng test  para correr las pruebas
//ng test --no-watch --code-coverage      para generar un informe de cobertura(lo podemos encontrar el html descargado dentro de la carpeta 'coverage' en la raiz del proyecto

import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { environment } from '../../environments/environment';
import { ListsService } from './lists.service';
import { CreateListDto, List } from '@models/list.model';

describe('Service: Lists', () => {
  let listService: ListsService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ListsService]
    });
    listService = TestBed.inject(ListsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be create', () => {
    expect(listService).toBeTruthy();
  });

  //prueba para Post
  //prueba que involucra una peticion Http
  describe('test for create', () =>{
    it('should return a new Lists', (doneFn) =>{
      //arrange
      const mockData: List = {//creamos un caso de prueba de lo que nos devolveria la peticion
        id: '1',
        title: 'Casa',
        position: 5,
        cards: [],
        showCardForm: true//estado para saber si mostrar boton crear nuevo card en cada lista
      };
      const dto: CreateListDto = {//dto de la nueva lista
        boardId: '1',
        title: 'Segunda Casa',
        position: 6
      }
      //Act
      listService.create({...dto}).subscribe((data) => {//{...dto} para prevenir problemas de mutacion - (principalmente para objetos o arrays)
        //Assert
        expect(data).toEqual(mockData);//aqui hacemos las pruebas necesarias, en este caso comparamos que la lista creada sea igual al mock
        doneFn();
      });

      //http config
      const url = `${environment.API_URL}/api/v1/lists`;
      const req = httpController.expectOne(url);//esto hace que cuando haga la peticio en vez de traer los datos reales, lo reemplace por el mock creado
      req.flush(mockData);//reemplaza la info
      expect(req.request.body).toEqual(dto);//comparamos para comprobar que el body enviado sea igual que el dto que se le pasa, para que no puedan modificar en el service este dato(prevenir errores)
      expect(req.request.method).toEqual('POST');//comprobamos que sea el mismo metodo
      //se puede comprobar que si ponemos en el service put en vez de post saltara el error al enviar el ng test
      httpController.verify();//verifica y monta el mock
    });
  });

});
