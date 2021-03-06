import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Animations } from 'src/app/shared/animations';
import { Board } from './board.model';
import { ScrumboardService } from './scrumboard.service';

@Component({
  selector: 'scrumboard',
  templateUrl: './scrumboard.component.html',
  styleUrls: ['./scrumboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : Animations
})
export class ScrumboardComponent implements OnInit,OnDestroy {

  boards: any[];

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
* Constructor
*
* @param {Router} _router
* @param {ScrumboardService} _scrumboardService
*/

  constructor(
    private _router: Router,
    private _scrumboardService: ScrumboardService

  ) {
    this._unsubscribeAll = new Subject();
  }
  ngOnDestroy(): void {
     // Unsubscribe from all subscriptions
     this._unsubscribeAll.next();
     this._unsubscribeAll.complete();
  }

  ngOnInit(): void {
    this._scrumboardService.onBoardsChanged
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe(boards => {
      console.log(boards)
      this.boards = boards;
    });
  }
  newBoard(): void {
    const newBoard = new Board({});
    this._scrumboardService.createNewBoard(newBoard).then(() => {
      this._router.navigate(['boards/' + newBoard.id + '/' + newBoard.uri]);
    });
  }

}
