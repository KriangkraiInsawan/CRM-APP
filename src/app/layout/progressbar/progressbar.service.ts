import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressbarService {
   // Private
   private _bufferValue: BehaviorSubject<number>;
   private _mode: BehaviorSubject<string>;
   private _value: BehaviorSubject<number>;
   private _visible: BehaviorSubject<boolean>;


  constructor(private router:Router) {
    this._init();
   }

  private _init():void {
    this._bufferValue = new BehaviorSubject(0);
    this._mode = new BehaviorSubject('indeterminate');
    this._value = new BehaviorSubject(0);
    this._visible = new BehaviorSubject(false);


  }
}
