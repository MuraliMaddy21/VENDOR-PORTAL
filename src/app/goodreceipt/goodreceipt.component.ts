import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goodreceipt',
  templateUrl: './goodreceipt.component.html',
  styleUrls: ['./goodreceipt.component.css']
})
export class GoodreceiptComponent implements OnInit {


  items:any
  result:any
  giitems:any

  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://localhost:3030/gr',{responseType:'json'}).subscribe((data)=>
    {
      this.result = data
      this.items = this.result['Envelope']['Body']['ZFM_GR_MURALI.Response']['IT_GH']['item']
      this.giitems = this.result['Envelope']['Body']['ZFM_GR_MURALI.Response']['IT_GI']['item']
      console.log(this.items)
      console.log(this.result)
      console.log(this.giitems)

    })
  }

}
