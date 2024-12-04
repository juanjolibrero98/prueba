import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBell, faInfoCircle, faClose, faAngleDown, faArrowRightLong} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@services/auth.service';
import { BoardsService } from '@services/boards.service';
import { Colors, NAVBAR_BACKGROUNDS } from '@models/colors.model';
import { MeService } from '@services/me.service';
import { Board } from '@models/board.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit{
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faClose = faClose;
  faAngleDown = faAngleDown;
  faArrowRightLong = faArrowRightLong;

  isOpenOverlayAvatar = false;
  isOpenOverlayBoards = false;
  isOpenOverlayCreateBoard = false;

  user$ = this.authService.user$;

  backgroundColorNavbar: Colors = 'sky';
  colorsNavbar = NAVBAR_BACKGROUNDS;

  boards: Board[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private boardsService: BoardsService,
    private meService: MeService
  ) {
    //nos subscribimos y nos actualiza el background color del navbar con cada cambio que tenga
    this.boardsService.backgroundColorBoard$.subscribe(color => {
      this.backgroundColorNavbar = color;
    })
  }
  ngOnInit(): void {
    this.getMeBoards();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

  close(event: boolean){
    this.isOpenOverlayCreateBoard = event;
  }

  get backgroundColor(){
    const classes = this.colorsNavbar[this.backgroundColorNavbar];//busca si en la lista de colores tiene el mismo color que el que tiene el board
    return classes ? classes : {};//si lo tiene añade las clases
  }

  getMeBoards() {
    this.meService.getMeBoards()
    .subscribe(boards => {
      this.boards = boards;
    });
  }
}
