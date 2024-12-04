import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Colors } from '@models/colors.model';
import { BoardsService } from '@services/boards.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html'
})
export class BoardFormComponent {

  @Output() closeOverlay = new EventEmitter<boolean>();

  form = this.formBuilder.nonNullable.group({
    title: ['', [Validators.required]],
    backgroundColor: new FormControl<Colors>('sky', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

  faCheck = faCheck;
  hola: any;

  constructor(
    private formBuilder: FormBuilder,
    private boardsService: BoardsService,
    private router: Router
  ) { }

  doCreate(){
    if(this.form.valid){
      const { title, backgroundColor } = this.form.getRawValue();
      this.boardsService.createBoard(title, backgroundColor)
      .subscribe(board => {
        this.closeOverlay.next(false);//output para cerrar el overlay del navbar tras crear un nuevo board
        location.reload();
        this.router.navigate(['/app/boards', board.id]);

      });
    }else{
      this.form.markAllAsTouched();//marque todos los campos en rojo
    }
  }
}
