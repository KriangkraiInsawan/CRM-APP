import { NgModule } from '@angular/core';

import { CamelCaseToDashPipe } from './camelCaseToDash.pipe';
import { FilterPipe } from './filter.pipe';
import { GenByidPipe } from './genById.pipe';
import { HtmlToPlaintextPipe } from './htmlToPlaintext.pipe';
import { KeysPipe } from './keys.pipe';
import { OrderByPipe } from './order-by.pipe';
import { ShotNamePipe } from './shot-name.pipe';
import { TitleUrlPipe } from './titleUrl.pipe';



@NgModule({
  declarations: [
    CamelCaseToDashPipe,
    FilterPipe,
    GenByidPipe,
    HtmlToPlaintextPipe,
    KeysPipe,
    OrderByPipe,
    ShotNamePipe,
    TitleUrlPipe
  ],
  imports: [],
  exports:[
    CamelCaseToDashPipe,
    FilterPipe,
    GenByidPipe,
    HtmlToPlaintextPipe,
    KeysPipe,
    OrderByPipe,
    ShotNamePipe,
    TitleUrlPipe
  ]
})
export class PipesModule { }
