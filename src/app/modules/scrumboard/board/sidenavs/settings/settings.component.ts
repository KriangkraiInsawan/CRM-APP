import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Animations } from 'src/app/shared/animations';
import { ScrumboardService } from '../../../scrumboard.service';

@Component({
  selector: 'scrumboard-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: Animations
})
export class scrumboardSettingsComponent implements OnInit, OnDestroy {

  board: any;
  view: string;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private scrumboardService: ScrumboardService
  ) {
    // Set the defaults
    this.view = 'main';

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }
  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  ngOnInit(): void {
    this.scrumboardService.onBoardChanged
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe(board => {
        this.board = board;
    });
  }

  toggleCardCover(): void {
    this.board.settings.cardCoverImages = !this.board.settings.cardCoverImages;
    this.scrumboardService.updateBoard();
  }

  toggleSubscription(): void {
    this.board.settings.subscribed = !this.board.settings.subscribed;
    this.scrumboardService.updateBoard();
  }

}
