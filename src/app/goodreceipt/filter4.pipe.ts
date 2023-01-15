import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter4'
})
export class Filter4Pipe implements PipeTransform {

  transform(value: any, filterString:String){
    

    if(value.length===0 || filterString==='')
    {
      return value;
    }

    const items=[];

    for(const entries of value)
    {
      if(entries['PO_NUMBER'].includes(filterString))
      {
        items.push(entries);
      }
    }
    return items;
  }

}



