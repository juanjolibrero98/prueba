import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Dialog } from '@angular/cdk/dialog';
import { CardDialogComponent } from '@boards/components/card-dialog/card-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { Board } from '@models/board.model';
import { BoardsService } from '@services/boards.service';
import { Card } from '@models/card.model';
import { CardsService } from '@services/cards.service';
import { List } from '@models/list.model';
import { FormControl, Validators } from '@angular/forms';
import { faClose, faPlus, faEllipsis, faImages } from '@fortawesome/free-solid-svg-icons';
import { ListsService } from '@services/lists.service';
import { BACKGROUNDS } from '@models/colors.model';
import { BoardDialogComponent } from '@boards/components/board-dialog/board-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent implements OnInit, OnDestroy{

  board: Board | null = null;
  showListForm = false;

  backgroundColorBoard = BACKGROUNDS;

  faClose = faClose;
  faPlus = faPlus;
  faEllipsis = faEllipsis;
  faImages = faImages;

  inputCard = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required]
  });

  inputList = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required]
  });

  constructor(
    private dialog: Dialog,
    private route: ActivatedRoute,
    private boardsService: BoardsService,
    private cardsService: CardsService,
    private listsService: ListsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id){
        this.getBoard(id);
      }
    })
  }

  //metodo para decir que cuando abandonemos la vista board(el detalle de una pizarra) nos cambie el color del background del navbar
  ngOnDestroy(): void {
    this.boardsService.setBackgroundColor('sky');
  }

  drop(event: CdkDragDrop<Card[]>) {
    //before
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    //after
    const position = this.boardsService.getPosition(event.container.data, event.currentIndex);
    const card = event.container.data[event.currentIndex];
    const listId = event.container.id;// el id que tiene la lista a la que se mueve la card
    this.updateCard(card, position, listId)
  }

  addList() {
    const title = this.inputList.value;
    if(this.board){
      this.listsService.create({
        title,
        boardId: this.board.id,
        position: this.boardsService.getPositionNewCardOrList(this.board.lists),
      }).subscribe(list => {
        this.board?.lists.push({
          ...list,
          cards: [],
        });
        this.closeListForm();
      });
    }
  }

  openDialog(card: Card, listTitle: string) {
    const dialogRef = this.dialog.open(CardDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      data: {
        card: card,
        listTitle: listTitle,
      },
    });
    dialogRef.closed.subscribe((output) => {
      if (output) {
        console.log(output);
      }
    });
  }

  private getBoard(id: Board['id']){
    this.boardsService.getBoard(id)
    .subscribe(board => {
      this.board = board;
      this.boardsService.setBackgroundColor(this.board.backgroundColor);
    });
  }

  //metodo para actualizar la card, pasandole la card y la posicion a la que se mueve
  //pasandole listId por si cambia la card de lista que tmb se actualice dicha lista
  private updateCard(card: Card, position: number, listId: number | string){
    this.cardsService.update(card.id, { position, listId })
    .subscribe((cardUpdate) => {
      console.log(cardUpdate);
    });
  }

  //metodo para saber si se esta creando una nueva card en una lista, así cerrar los otros crear de otras listas
  openFormCard(list: List){
    //list.showCardForm = !list.showCardForm;
    //list: false => todos
    //list click: true
    this.inputCard.setValue('');
    if(this.board?.lists){
      this.board.lists = this.board.lists.map(iteratorList => {
        if(iteratorList.id === list.id){
          return {
            ...iteratorList,
            showCardForm: true,
          }
        }
        return {
          ...iteratorList,
          showCardForm: false,
        }
      })
    }
  }

  createCard(list: List){
    const title = this.inputCard.value;
    if(this.board){
      this.cardsService.create({
        title,
        listId: list.id,
        boardId: this.board.id,
        position: this.boardsService.getPositionNewCardOrList(list.cards),
      }).subscribe(card => {
        list.cards.push(card);
        this.inputCard.setValue('');
        this.closeCardForm(list);
      });
    }
  }

  closeCardForm(list: List){
    list.showCardForm = false;
  }

  closeListForm(){
    this.inputList.setValue('');
    this.showListForm = false;
  }

  get backgroundColor(){
    if(this.board){
      const classes = this.backgroundColorBoard[this.board.backgroundColor];//busca si en la lista de colores tiene el mismo color que el que tiene el board
      return classes ? classes : {};//si lo tiene añade las clases
    }
    return {}
  }

  openDialogBoard(board: Board | null) {
    const dialogRef = this.dialog.open(BoardDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      data: {
        board: board,
      },
    });
    dialogRef.closed.subscribe((output) => {
      if (output) {
        console.log(output);
      }
    });
  }
}
