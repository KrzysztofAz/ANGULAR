import { Pipe, PipeTransform } from '@angular/core';
import { Scores } from '../interfaces/scores';

@Pipe({
  name: 'sortMyScores'
})
export class SortMyScoresPipe implements PipeTransform {

  transform(list: Scores[], listlength: number, sortMethod: string): Scores[] {

    list.sort((a,b) => {return b.score - a.score})

    let newList: Scores[] = [];

    list.map((el) => {
      if (newList.length < 10
        ) {
        newList.push(el)
      }
    })

    if (sortMethod === 'ascending') {
      newList.sort((a, b) => { return a.score - b.score })
    }


    if (sortMethod === 'descending') {
      newList.sort((a, b) => { return b.score - a.score })
    }

    return newList;
  }

}
