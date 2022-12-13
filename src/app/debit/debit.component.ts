import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.css']
})
export class DebitComponent implements OnInit {

  items:any
  result:any

  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://localhost:3030/credit',{responseType:'json'}).subscribe((data)=>
    {
      this.result = data
      console.log(this.result)
      this.items=this.result['Envelope']['Body']['ZFM_CREDIT_DEBIT_MEMO_VP_MD.Response']['I_DEBIT']['item']
      console.log(this.items)
    })
  }

}
