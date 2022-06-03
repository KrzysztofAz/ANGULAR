import { Pipe, PipeTransform } from '@angular/core';
import { Scores } from '../interfaces/scores';

@Pipe({
  name: 'filterMyScores'
})
export class FilterMyScoresPipe implements PipeTransform {

  
  transform(list: Scores[], listlength: number, name: string ): Scores[] {

    let newArr: Scores[] = [];

    list.forEach(element => {
      if(element.name == name){
        newArr.push(element)
      }
    })


    return newArr;
  }

}
