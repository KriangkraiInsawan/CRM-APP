import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { ScrumboardService } from '../scrumboard.service';
import { takeUntil } from 'rxjs/operators';
import { List } from '../list.model';
import { Animations } from 'src/app/shared/animations';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : Animations
})
export class BoardComponent implements OnInit, OnDestroy {

  board: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _location: Location,
    private _scrumboardService: ScrumboardService
  ) {
    this._unsubscribeAll = new Subject();
  }
  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  ngOnInit(): void {
    this._scrumboardService.onBoardChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(board => {
        this.board = board;
      });
  }
  /**
* On list add
*
* @param newListName
*/
  onListAdd(newListName): void {
    if (newListName === '') {
      return;
    }

    this._scrumboardService.addList(new List({ name: newListName }));
  }

  /**
* On board name changed
*
* @param newName
*/
  onBoardNameChanged(newName): void {
    this._scrumboardService.updateBoard();
    this._location.go('/apps/scrumboard/boards/' + this.board.id + '/' + this.board.uri);
  }
  /**
* On drop
*
* @param ev
*/
  onDrop(ev): void {
    this._scrumboardService.updateBoard();
  }

}
