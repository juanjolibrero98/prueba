import { Component, OnInit } from '@angular/core';
import { MeService } from '@services/me.service';
import { UsersService } from '@services/users.service';
import { Profile, UpdateProfile } from '@models/user.model';
import { faUser, faUserEdit, faClose, faCheck, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Dialog } from '@angular/cdk/dialog';
import { AvatarDialogComponent } from '../../components/avatar-dialog/avatar-dialog.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
    `
      :root {
        --main-color: #4a76a8;
      }

      .bg-main-color {
        background-color: var(--main-color);
      }

      .text-main-color {
        color: var(--main-color);
      }

      .border-main-color {
        border-color: var(--main-color);
      }
    `,
  ],
})
export class ProfileComponent implements OnInit{

  meProfile: Profile | null = null;
  userId: string = '';
  updateInfoUser: boolean = false;
  typeAvatar: string = '';
  avatarTypeDiv: boolean = false;
  faUser = faUser;
  faUserEdit = faUserEdit;
  faClose = faClose;
  faCheck = faCheck;
  faEnvelope = faEnvelope;

  form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    avatar: ['', [Validators.required]],
  });

  constructor(
    private meService: MeService,
    private usersService: UsersService,
    private dialog: Dialog,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.meService.getAllMeProfile()
    .subscribe(profile => {
      this.meProfile = profile;
      this.form.controls['name'].setValue(profile.name);
      this.form.controls['email'].setValue(profile.email);
      this.userId = profile.id;
    });
  }

  openDialog(avatar: any){
    const dialogRef = this.dialog.open(AvatarDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      data: {
        avatar: avatar,
      },
    });
    dialogRef.closed.subscribe((output) => {
      if (output) {
        console.log(output);
      }
    });
  }

  updateProfile(){
    if(this.form.valid){
      this.form.controls['avatar'].setValue(`https://api.lorem.space/image/${this.form.controls['avatar'].getRawValue()}?w=480&h=480&r=4454`);
      const updateUser: UpdateProfile = this.form.getRawValue();
      this.usersService.updateInfoUser(this.userId, updateUser.email, updateUser.name, updateUser.avatar)
      .subscribe(profile => {
        location.reload();
       this.updateInfoUser = false;
      });
    }else{
      this.form.markAllAsTouched();//marque todos los campos en rojo
    }
  }

  //https://lorem.space/
  mouseOver(type: string){
    this.typeAvatar = type;
    this.avatarTypeDiv = true;
  }

  mouseOut(){
    this.typeAvatar = '';
    this.avatarTypeDiv = false;
  }
}
