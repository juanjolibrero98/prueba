import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { AvatarDialogComponent } from './components/avatar-dialog/avatar-dialog.component';
import { DialogModule } from '@angular/cdk/dialog';
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ProfileComponent,
        AvatarDialogComponent
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        FontAwesomeModule,
        DialogModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class ProfileModule { }
