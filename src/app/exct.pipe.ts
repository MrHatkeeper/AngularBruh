import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exct'
})
export class ExctPipe implements PipeTransform {

  transform(text: string, lenght: number): string {
    if(text.length > lenght){
      return text.substr(0, lenght) + '...';
    }
    return text;
  }
}
