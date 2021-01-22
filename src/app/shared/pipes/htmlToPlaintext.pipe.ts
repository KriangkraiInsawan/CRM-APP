import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlToPlaintext'
})
export class HtmlToPlaintextPipe implements PipeTransform {

  /**
   *
   * @param {string} value
   * @param {any[]} args
   * @returns {string}
   */

  transform(value: string, args: any[] = []): string {
    return value ? String(value).replace(/<[^>]+>/gm, '') : '';
  }

}
