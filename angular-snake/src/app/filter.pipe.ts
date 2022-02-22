import { Pipe, PipeTransform } from '@angular/core';
import { Actions } from './actions';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(actionList: Array<Actions>, selectedSort: string, arrLength: number): Array<Actions> {
    if (selectedSort === "all") {
      return actionList
    }
    let filteredArray: Array<Actions> = []
    actionList.forEach((el) => {
      if (el.action === selectedSort ) {
        filteredArray.push(el)
      }
    })
    return filteredArray
  }

}
