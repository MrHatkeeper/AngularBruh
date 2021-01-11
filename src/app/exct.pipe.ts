import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exct'
})
export class ExctPipe implements PipeTransform {

  transform(text: string, lengh: number, change: string): string {
    if(text.length > lengh){
      return text.substr(0, lengh) + change;
    }
    return text;
  }
}
