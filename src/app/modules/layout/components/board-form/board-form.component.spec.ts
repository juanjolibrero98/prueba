import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { BoardFormComponent } from "./board-form.component";
import { EventEmitter } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BoardsService } from "@services/boards.service";
import { Router } from "@angular/router";
import { Board } from "../../../../models/board.model";
// podemos usar 'f' en el describe - 'fdescribe', que significa focus, y es para hacer foco a esa prueba, omitiendo las demas, para cuando queramos hacer una prueba unica y no perder tiempo en las otras

describe('Component: BoardFormComponent', () => {
  let component: BoardFormComponent;
  let fixture: ComponentFixture<BoardFormComponent>;//es un ambiente creado para poder interactuar con el componente
  let boardFormComponent: BoardFormComponent;
  let httpController: HttpTestingController;
  let boardsService: jasmine.SpyObj<BoardsService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('BoardsService', ['doCreate']);//espia que creamos para indicar que solo queremos ver este metodo del servicio
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);//espiamos el metodo navigate del router

    await TestBed.configureTestingModule({
      declarations: [BoardFormComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [BoardFormComponent, {provide: BoardsService, useValue: spy}, {provide: Router, useValue: routerSpy} ]//proveemos, indicando que cuando se pida algo de aqui lo mandará con el spy indicado
    }).compileComponents();//metodo asincrono que acaba compilando el componente, en resumen, creamos un modulo pequeño para poder lanzar nuestras pruebas
    boardFormComponent = TestBed.inject(BoardFormComponent);
    httpController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardFormComponent);//aqui recuperamos el fixture diciendole que vamos a trabajar sobre este fixture, creando el componente userTable
    boardsService = TestBed.inject(BoardsService) as jasmine.SpyObj<BoardsService>;//obtenemos el service del modulo creado para pruebas
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    component = fixture.componentInstance;
    component.closeOverlay.next(false);//le pasamos al @output el valor de color
    fixture.detectChanges();//ciclo de vida de angular
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise return a boolean with closeOverlay', () => {
    let valor = new EventEmitter<boolean>();
    valor.next(false);
    expect(component.closeOverlay).toEqual(valor);
  })

  it('should test for router to use navigate in BoardService', fakeAsync(() => {
    const mockBoard: Board = {
      id: '1',
      title: 'Pruebas', 
      backgroundColor: 'sky',
      members: [],
      lists: [],
      cards: []
    };
    //boardsService.createBoard.and.returnValue(asyncData(mockBoard));
    //Act
    fixture.detectChanges();
    expect(component.doCreate.length).toEqual(0);

    tick();//espera y resuelve la peticion asincrona con esta instruccion
    fixture.detectChanges();
    expect(component.form.invalid).toBeTruthy();//comprobar que se valido/invalido el form
    //expect(boardsService.createBoard).toHaveBeenCalled();//comprobar que se paso los pasos anteriores a la creacion y se creo el board
    //expect(router.navigate).toHaveBeenCalledWith(['/app/boards', mockBoard.id]);
  }));
  
})


function asyncData(mockBoard: Board): import("rxjs").Observable<Board> {
  throw new Error("Function not implemented.");
}

