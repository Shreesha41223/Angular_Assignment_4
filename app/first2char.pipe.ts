import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'first2char',
  standalone: true
})
export class First2charPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.substring(0,2);
  }

}
