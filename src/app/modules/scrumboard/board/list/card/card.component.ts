import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'scrumboard-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  @Input()
  cardId;

  card: any;
  board: any;

        /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     */

  constructor(private _activatedRoute: ActivatedRoute) {

   }

  ngOnInit(): void {
    this.board = this._activatedRoute.snapshot.data.board;
    // console.log(this.board)
    this.card = this.board.cards.filter((card) => {
        return this.cardId === card.id;
    })[0];
  }

    /**
     * Is the card overdue?
     *
     * @param cardDate
     * @returns {boolean}
     */
     isOverdue(cardDate): boolean
     {
         return moment() > moment(new Date(cardDate));
     }

}