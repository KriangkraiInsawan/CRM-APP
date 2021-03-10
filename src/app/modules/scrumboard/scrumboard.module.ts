import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScrumboardComponent } from './scrumboard.component';
import { BoardComponent } from './board/board.component';
import { ListComponent } from './board/list/list.component';
import { CardComponent } from './board/list/card/card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddCardComponent } from './board/list/add-card/add-card.component';
import { BoardResolve, ScrumboardService } from './scrumboard.service';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { EditListNameComponent } from './board/list/edit-list-name/edit-list-name.component';
import { AddListComponent } from './board/add-list/add-list.component';
import { SettingsComponent } from './board/sidenavs/settings/settings.component';
import { EditBoardNameComponent } from './board/edit-board-name/edit-board-name.component';

const routes: Routes = [
  {
    path: '',
    component: ScrumboardComponent,
    resolve: {
      scrumboard: ScrumboardService
    },
},
{
  path: 'boards/:boardId/:boardUri',
  component: BoardComponent,
  resolve: {
    board: BoardResolve
  }
},
{
  path: '**',
  redirectTo: 'boards'
}
]

@NgModule({
  declarations: [ScrumboardComponent, BoardComponent, ListComponent, CardComponent, AddCardComponent, EditListNameComponent, AddListComponent, SettingsComponent, EditBoardNameComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatToolbarModule,
    MatTooltipModule,
    MatRippleModule,
    NgxDnDModule
  ],
  providers      : [
    ScrumboardService,
    BoardResolve
],
// entryComponents: [ScrumboardCardDialogComponent]
})
export class ScrumboardModule { }
