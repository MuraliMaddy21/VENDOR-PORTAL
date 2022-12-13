import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {

  items:any;
  result:any;

  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://localhost:3030/quotation',{responseType:'json'}).subscribe((data)=>
    {
      this.result = data
      console.log(this.result)
      this.items=this.result['Envelope']['Body']['ZFM_QUOTATION_MURALI.Response']['IT_QUOTATION']['item']
    console.log(this.items)

    })
  }



}
