import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProgressbarService } from './progressbar.service';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

  bufferValue: number;
  mode: 'determinate' | 'indeterminate' | 'buffer' | 'query';
  value: number;
  visible: boolean;

  private unsubscribeAll: Subject<any>;

  constructor(private progressBarService: ProgressbarService) {
    this.unsubscribeAll = new Subject();
  }

  ngOnInit(): void {

  }

}
