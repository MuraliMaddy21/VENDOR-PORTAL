import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-debit',
  templateUrl: './credit-debit.component.html',
  styleUrls: ['./credit-debit.component.css']
})
export class CreditDebitComponent implements OnInit {


  items:any
  result:any

  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://localhost:3030/credit',{responseType:'json'}).subscribe((data)=>
    {
      this.result = data
      console.log(this.result)
      this.items=this.result['Envelope']['Body']['ZFM_CREDIT_DEBIT_MEMO_VP_MD.Response']['I_CREDIT']['item']
      console.log(this.items)
    })
  }

}
