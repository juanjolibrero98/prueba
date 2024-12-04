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
} from '@fortawesome/free-solid-svg-icons';
import { Board } from '@models/board.model';
import { BoardsService } from '@services/boards.service';
import { Colors } from '@models/colors.model';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

interface InputData {
  board: Board;
}

interface OutputData {
  rta: boolean;
}

@Component({
  selector: 'app-board-dialog',
  templateUrl: './board-dialog.component.html',
})
export class BoardDialogComponent {
  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  board: Board;

  form = this.formBuilder.nonNullable.group({
    title: ['', [Validators.required]],
    backgroundColor: new FormControl<Colors>('sky', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: InputData,
    private boardsService: BoardsService,
    private formBuilder: FormBuilder,
  ) {
    this.board = data.board;
    this.form.controls['title'].setValue(this.board.title);
    this.form.controls['backgroundColor'].setValue(this.board.backgroundColor);
  }

  close() {
    this.dialogRef.close();
  }

  updateBoard(id: Board['id']){
    if (this.form.valid) {
      const { title, backgroundColor } = this.form.getRawValue();
      this.boardsService.updateBoard(id, title, backgroundColor)
      .subscribe(board => {
        this.close();
        location.reload();
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
