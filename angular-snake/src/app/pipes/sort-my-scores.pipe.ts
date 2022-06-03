import { Pipe, PipeTransform } from '@angular/core';
import { Scores } from '../interfaces/scores';

@Pipe({
  name: 'sortMyScores'
})
export class SortMyScoresPipe implements PipeTransform {

  transform(list: Scores[], listlength: number, sortMethod: string): Scores[] {

    if(sortMethod === 'ascending'){
      list.sort((a,b) => {return a.score - b.score})
    }

    
    if(sortMethod === 'descending'){
      list.sort((a,b) => {return b.score - a.score})
    }

    return list;
  }

}
