import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  /**
   *
   * @param value
   * @param {string[]} args
   * @returns {any}
   */

  transform(value: any, args: string[]): any {

    const keys: any[] = [];

    for (const key of value) {
      if (value.hasOwnProperty(key)) {
        keys.push({
          key, value: value[key]
        })
      }
    }

    return keys;
  }
}
