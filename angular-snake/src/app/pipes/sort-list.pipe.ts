import { Pipe, PipeTransform } from '@angular/core';
import { Scores } from '../interfaces/scores';

@Pipe({
  name: 'sortList'
})
export class SortListPipe implements PipeTransform {

  transform(list: Array<Scores>, listlength: number): Array<Scores> {


      let newList: Scores[] = [];

    list.forEach((element) => {
      if(newList.length < 10){
        newList.push(element)
      }
    })

      return newList;
    }

}
