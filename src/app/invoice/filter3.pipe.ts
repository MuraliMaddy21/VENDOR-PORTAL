import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'filter3'
})
export class Filter3Pipe implements PipeTransform {

  transform(value: any, filterString:String){
    

    if(value.length===0 || filterString==='')
    {
      return value;
    }
     
    filterString=filterString.toUpperCase();
    const items=[];

    for(const entries of value)
    {
      if(entries['KOART'].toUpperCase().includes(filterString))
      {
        items.push(entries);
      }
    }
    return items;
  }

}


