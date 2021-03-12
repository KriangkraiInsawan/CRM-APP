import { Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FuseConfirmDialogComponent } from 'src/app/shared/components/formbase/confirm-dialog/confirm-dialog.component';
import { FusePerfectScrollbarDirective } from 'src/app/shared/directives/fuse-perfect-scrollbar.directive';
import { Card } from '../../card.model';
import { ScrumboardService } from '../../scrumboard.service';
import { CardDialogComponent } from '../dialogs/card/card.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'scrumboard-board-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit, OnDestroy {

  board: any;
  dialogRef: any;

  @Input()
  list;

  @ViewChild(FusePerfectScrollbarDirective)
  listScroll: FusePerfectScrollbarDirective;

  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

  // Private
  private _unsubscribeAll: Subject<any>;


  constructor(
    private _activatedRoute: ActivatedRoute,
    private _scrumboardService: ScrumboardService,
    private _matDialog: MatDialog
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
 * On list name changed
 *
 * @param newListName
 */
  onListNameChanged(newListName): void {
    this.list.name = newListName;
  }

  /**
* On card added
*
* @param newCardName
*/
  onCardAdd(newCardName): void {
    if (newCardName === '') {
      return;
    }

    this._scrumboardService.addCard(this.list.id, new Card({ name: newCardName }));

    setTimeout(() => {
      this.listScroll.scrollToBottom(0, 400);
    });
  }
  /**
 * Remove list
 *
 * @param listId
 */
  removeList(listId): void {
      this.confirmDialogRef = this._matDialog.open(FuseConfirmDialogComponent, {
        disableClose: false
    });

    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete the list and it\'s all cards?';

    this.confirmDialogRef.afterClosed().subscribe(result => {
        if ( result )
        {
            this._scrumboardService.removeList(listId);
        }
    });
  }
  /**
* Open card dialog
*
* @param cardId
*/
  openCardDialog(cardId): void {
    this.dialogRef = this._matDialog.open(CardDialogComponent, {
      panelClass: 'scrumboard-card-dialog',
      data: {
        cardId: cardId,
        listId: this.list.id
      }
    });
    this.dialogRef.afterClosed()
      .subscribe(response => {

      });
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
