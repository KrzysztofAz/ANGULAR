import { Pipe, PipeTransform } from '@angular/core';
import { Scores } from '../interfaces/scores';

@Pipe({
  name: 'sortList'
})
export class SortListPipe implements PipeTransform {

  transform(list: Array<Scores>, listlength: number): Array<Scores> {


    let newList = list.sort((a,b) => {return b.score - a.score})

      return newList;
    }

}
