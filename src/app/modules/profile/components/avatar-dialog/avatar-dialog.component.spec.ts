import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { AvatarDialogComponent } from "./avatar-dialog.component";
import { By } from "@angular/platform-browser";
// podemos usar 'f' en el describe - 'fdescribe', que significa focus, y es para hacer foco a esa prueba, omitiendo las demas, para cuando queramos hacer una prueba unica y no perder tiempo en las otras

/*describe('Component: AvatarDialogComponent', () => {
  let component: AvatarDialogComponent;
  let fixture: ComponentFixture<AvatarDialogComponent>;//es un ambiente creado para poder interactuar con el componente
  let avatarDialogComponent: AvatarDialogComponent;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvatarDialogComponent],
      imports: [HttpClientTestingModule],
      providers: [AvatarDialogComponent]
    }).compileComponents();//metodo asincrono que acaba compilando el componente, en resumen, creamos un modulo pequeño para poder lanzar nuestras pruebas
    avatarDialogComponent = TestBed.inject(AvatarDialogComponent);
    httpController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarDialogComponent);//aqui recuperamos el fixture diciendole que vamos a trabajar sobre este fixture, creando el componente userTable
    component = fixture.componentInstance;
    fixture.detectChanges();//ciclo de vida de angular
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a ref with pruebaClick when do click', () => {
    //Arrange
    const expectMsg = 'Pepe';
    component.hola = 'Pepe';
    const button = fixture.debugElement.query(By.css('button.btn-prb')).nativeElement;
    //Act
    component.pruebaClick();
    fixture.detectChanges();
    //Assert
    expect(button.textContent).toContain('expectMsg');
  })
  
})*/