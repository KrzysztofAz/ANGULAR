import { Pipe, PipeTransform } from '@angular/core';
import { Scores } from '../interfaces/scores';

@Pipe({
  name: 'sortList'
})
export class SortListPipe implements PipeTransform {

  transform(list: Array<Scores>, listlength: number, selectedSort: string): Array<Scores> {


    let newList: Scores[] = [];

    list.map((el) => {
      if (newList.length < 10) {
        newList.push(el)
      }
    })

    if (selectedSort === 'ascending') {
      newList.sort((a, b) => { return a.score - b.score })
      return newList;
    }

    if (selectedSort === 'descending') {
      newList.sort((a, b) => { return b.score - a.score })
      return newList;
    }

    return newList;
  }

}
