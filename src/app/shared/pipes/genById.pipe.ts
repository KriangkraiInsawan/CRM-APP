import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genByid',
  pure: false
})
export class GenByidPipe implements PipeTransform {

  /**
   *
   * @param {any[]} value
   * @param {number} id
   * @param {string} property
   * @returns {any}
   */

  transform(value: any[], id: any, property: string): any {
    const foundItem = value.find(item => {
      if (item.id !== undefined) {
        return item.id === id;
      }
      return false
    });
    if (foundItem) {
      return foundItem[property];
    }

  }

}
