import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTablefield]'
})
export class TablefieldDirective {
  private el:ElementRef;

  @Input('tableField') option: any;

  constructor(el:ElementRef) {

    this.el = el;
   }

   ngOninit():void{
     this.el.nativeElement.innerText = 'yellow';
   }

}
