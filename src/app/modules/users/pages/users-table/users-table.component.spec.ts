import { ComponentFixture, TestBed } from "@angular/core/testing";
import { UsersTableComponent } from "./users-table.component";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { User } from "@models/user.model";
// podemos usar 'f' en el describe - 'fdescribe', que significa focus, y es para hacer foco a esa prueba, omitiendo las demas, para cuando queramos hacer una prueba unica y no perder tiempo en las otras

describe('Component: UsersTableComponent', () => {
  let component: UsersTableComponent;
  let fixture: ComponentFixture<UsersTableComponent>;//es un ambiente creado para poder interactuar con el componente
  let usersTableComponent: UsersTableComponent;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersTableComponent],
      imports: [HttpClientTestingModule],
      providers: [UsersTableComponent]
    }).compileComponents();//metodo asincrono que acaba compilando el componente, en resumen, creamos un modulo pequeño para poder lanzar nuestras pruebas
    usersTableComponent = TestBed.inject(UsersTableComponent);
    httpController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTableComponent);//aqui recuperamos el fixture diciendole que vamos a trabajar sobre este fixture, creando el componente userTable
    component = fixture.componentInstance;
    fixture.detectChanges();//ciclo de vida de angular
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <h1> with "Hello, { user.name }"', () => {//prueba donde usamos el entorno creado para sacar con el nativeElement el elemento h1 y comparar si es lo mismo que en el html
    //arrange
    component.user = { id: '1', name: 'Pepe', email: 'a@a.es', avatar: ''};
    const expectMsg = `Hello, ${component.user.name}`
    const userTableDebug: DebugElement = fixture.debugElement;//usamos DebugElement para poder utilizar si lo necesitamos el querySelector para CSS
    const userTableElement: HTMLElement = userTableDebug.nativeElement;
    const h1 = userTableElement.querySelector('h1');
    //Act
    fixture.detectChanges();//detecta el cambio de User para poder luego compararlo
    //Assert
    expect(h1?.textContent).toEqual(expectMsg);
  })

  it('should have <p> with "Caso de prueba TEST"', () => {//prueba donde usamos el entorno creado para sacar con el nativeElement el elemento h1 y comparar si es lo mismo que en el html
    const userTableDebug: DebugElement = fixture.debugElement;//usamos DebugElement para poder utilizar si lo necesitamos el querySelector para CSS
    const thDebug: DebugElement = userTableDebug.query(By.css('p'));//mejor practica para usar los selectores con By.css
    const thElement: HTMLElement = thDebug.nativeElement;
    expect(thElement?.textContent).toEqual('Caso de prueba TEST');
  })

  describe('tests for getUsers', () => {
    it('should return user list from service'), () => {
      //Arrange
      const usersMock: User[] = [{
        id: '1',
        name: 'Pepe',
        email: 'a@a.es',
        avatar: ''
      }];
      component.getUsers();
      // TODO:
      fixture.detectChanges();
      //Assert
      expect(component.getUsers.length).toEqual(usersMock.length);
    }

    it('should comprove the message error of method'), () => {
      //Arrange
      const usersMock: User[] = [{
        id: '1',
        name: 'Pepe',
        email: 'a@a.es',
        avatar: ''
      }];
      component.getUsers();
      // TODO:
      fixture.detectChanges();
      //Assert
      expect(component.dataSource.data.error).toEqual('Error 400');
    }
  })
})