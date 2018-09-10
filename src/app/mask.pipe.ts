import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, max: any = 5): any {
    // let max = 5;
    if (value.length <= 5) {
      return value;
    } else {
      return value.substr(0, max) + '***';
    }
  }

}
