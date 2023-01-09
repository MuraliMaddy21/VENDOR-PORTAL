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
  time:any;
  filterdata:any="";

  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {

    let date:Date= new Date()
    this.time=date;

    this.http.get('http://localhost:3030/getauth',{responseType:'json'}).subscribe((data)=>
    {
      this.result = data
      console.log(this.result)
      if(this.result==null)
      {
        window.alert("You haven't logged in!Redirecting to Login Page")
        this.route.navigate([""]);
      }
    })


    this.http.get('http://localhost:3030/pa',{responseType:'json'}).subscribe((data)=>
    {
      this.result = data
      console.log(this.result)
      this.items=this.result['Envelope']['Body']['ZFM_PAYAGE_MURALI.Response']['I_PAYAGE']['item']
      console.log(this.items)

    })
  }

  shutdown()
  {
    this.http.get('http://localhost:3030/shutdown',{responseType:'json'}).subscribe((data)=>
    {
      
    });
    
    this.route.navigate([""]);
  }

}

