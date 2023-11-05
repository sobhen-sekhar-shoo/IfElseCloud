import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'random'
})
export class RandomPipe implements PipeTransform {

  transform(input: any, min: number = 0, max: number = 1): any {
   
    if (min > max) {
      max = min;
      min = 0;
    }

    return Number((Math.random() * (5 - 0) + 0).toFixed(0));
  }
}

