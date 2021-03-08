import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScrumboardComponent } from './scrumboard.component';

const routes: Routes = [
  {
    path: '',
    // component: ScrumboardComponent,
    resolve: {
      // scrumboard: ScrumboardService
    },
},
{
  // path: 'boards',
  // component: BoardComponent,
  // resolve: {
  //   board: BoardResolve
  // }
},
{
  path: '**',
  redirectTo: 'boards'
}
]

@NgModule({
  declarations: [ScrumboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ScrumboardModule { }
