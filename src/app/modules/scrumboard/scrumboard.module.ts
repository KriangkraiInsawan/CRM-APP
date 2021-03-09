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

const routes: Routes = [
  {
    path: '',
    component: ScrumboardComponent,
    resolve: {
      scrumboard: ScrumboardService
    },
},
{
  path: 'boards',
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
  declarations: [ScrumboardComponent, BoardComponent, ListComponent, CardComponent, AddCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatToolbarModule,
    MatTooltipModule,

    // NgxDnDModule
  ],
  providers      : [
    ScrumboardService,
    BoardResolve
],
// entryComponents: [ScrumboardCardDialogComponent]
})
export class ScrumboardModule { }
