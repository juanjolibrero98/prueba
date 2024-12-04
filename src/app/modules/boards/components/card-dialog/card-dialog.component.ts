import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import {
  faClose,
  faCheckToSlot,
  faBars,
  faUser,
  faTag,
  faCheckSquare,
  faClock,
  faPenToSquare
} from '@fortawesome/free-solid-svg-icons';
import { Card } from '@models/card.model';
import { FormBuilder, Validators } from '@angular/forms';
import { CardsService } from '@services/cards.service';

//pasar los datos de la tarea a este detalle y mostrarlos en el popup
interface InputData {
  card: Card;
  listTitle: string;
}

//devolver respuesta al cerrar el popup
interface OutputData {
  rta: boolean;
}

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
})
export class CardDialogComponent {
  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;
  faPenToSquare = faPenToSquare;

  card: Card;
  listTitle: string = '';

  updateCardDetail: boolean = false;

  form = this.formBuilder.nonNullable.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]]
  });

  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: InputData,
    private formBuilder: FormBuilder,
    private cardsService: CardsService,
  ) {
    this.card = data.card;
    this.listTitle = data.listTitle;
    this.form.controls['title'].setValue(this.card.title);
    this.form.controls['description'].setValue(this.card.description);
  }

  close() {
    this.dialogRef.close();
  }

  updateCard(id: Card['id']){
    if (this.form.valid) {
      console.log(this.form.getRawValue());
      this.cardsService.update(id, this.form.getRawValue())
      .subscribe(card => {
        this.close();
        location.reload();
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
