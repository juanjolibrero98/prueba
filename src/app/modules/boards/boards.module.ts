import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DialogModule } from '@angular/cdk/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { BoardsRoutingModule } from './boards-routing.module';
import { BoardsComponent } from './pages/boards/boards.component';
import { BoardComponent } from './pages/board/board.component';
import { CardDialogComponent } from './components/card-dialog/card-dialog.component';
import { BoardDialogComponent } from './components/board-dialog/board-dialog.component';

@NgModule({
  declarations: [
    BoardsComponent,
    BoardComponent,
    CardDialogComponent,
    BoardDialogComponent
  ],
  imports: [
    CommonModule,
    BoardsRoutingModule,
    SharedModule,
    DragDropModule,
    CdkAccordionModule,
    DialogModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class BoardsModule { }
