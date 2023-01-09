import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter1'
})
export class Filter1Pipe implements PipeTransform {

  transform(value: any, filterString:String){
    

    if(value.length===0 || filterString==='')
    {
      return value;
    }

    const items=[];

    for(const entries of value)
    {
      if(entries['DOC_DATE'].includes(filterString))
      {
        items.push(entries);
      }
    }
    return items;
  }

}