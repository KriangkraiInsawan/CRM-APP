import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Animations } from 'src/app/shared/animations';
import { Utils } from 'src/app/shared/utils';
import { ScrumboardService } from '../../../scrumboard.service';

@Component({
  selector: 'scrumboard-label-selector',
  templateUrl: './label-selector.component.html',
  styleUrls: ['./label-selector.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: Animations
})
export class LabelSelectorComponent implements OnInit, OnDestroy {

  @Input('card')
  card: any;

  @Output()
  cardLabelsChanged: EventEmitter<any>;

  board: any;
  labelsMenuView: string;
  selectedLabel: any;
  newLabel: any;
  toggleInArray: any;

  constructor(
    private _scrumboardService: ScrumboardService,
    private _unsubscribeAll: Subject<any>
  ) {
    this.cardLabelsChanged = new EventEmitter();
    this.labelsMenuView = 'labels';
    this.newLabel = {
      'id': '',
      'name': '',
      'color': 'blue-400'
    };
    this.toggleInArray = Utils.toggleInArray;

    // Set the private defaults
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

  onCardLabelsChanged(): void
  {
      this.cardLabelsChanged.next();
  }

  onLabelChange(): void
  {
      this._scrumboardService.updateBoard();
  }

  addNewLabel(): void
  {
      this.newLabel.id = Utils.generateGUID();
      this.board.labels.push(Object.assign({}, this.newLabel));
      this.newLabel.name = '';
      this.labelsMenuView = 'labels';
  }

}
