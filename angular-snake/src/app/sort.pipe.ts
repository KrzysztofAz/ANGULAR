import { Pipe, PipeTransform } from '@angular/core';
import { Actions } from './actions';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(actionList: Array<Actions>, selectedFilter: string, arrLength: number): Array<Actions> {
    if (selectedFilter === "ascending") {
      actionList.sort((a,b) => {
        return a.seconds - b.seconds
      })
    }
    if (selectedFilter === "descending") {
      actionList.sort((a,b) => {
        return  b.seconds - a.seconds
      })
    }
    return actionList
  }

}
