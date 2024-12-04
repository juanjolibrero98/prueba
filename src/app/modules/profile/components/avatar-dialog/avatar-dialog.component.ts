import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Profile } from '@models/user.model';

interface InputData {
  avatar: Profile['avatar'];
}

interface OutputData {
  rta: boolean;
}

@Component({
  selector: 'app-avatar-dialog',
  templateUrl: './avatar-dialog.component.html',
})
export class AvatarDialogComponent {
  faClose = faClose;

  avatar: Profile['avatar'];

  hola = '';

  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: InputData
  ) {
    this.avatar = data.avatar;
  }

  close() {
    this.dialogRef.close();
  }

  pruebaClick(){
    this.hola = 'Pepe';
  }
}
