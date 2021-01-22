import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  /**
   *
   * @param {any[]} mainArr
   * @param {string} searchTexts
   * @param {string} property
   * @returns {any}
   */

  transform(mainArr: any[], prop: string): any {
    return mainArr.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }
}
