import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payage',
  templateUrl: './payage.component.html',
  styleUrls: ['./payage.component.css']
})
export class PayageComponent implements OnInit {

  items:any
  result:any

  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://localhost:3030/pa',{responseType:'json'}).subscribe((data)=>
    {
      this.result = data
      console.log(this.result)
      this.items=this.result['Envelope']['Body']['ZFM_PAYAGE_MURALI.Response']['I_PAYAGE']['item']
      console.log(this.items)

    })
  }

}
