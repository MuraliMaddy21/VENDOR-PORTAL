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

  shutdown()
  {
    this.http.get('http://localhost:3030/shutdown',{responseType:'json'}).subscribe((data)=>
    {
      
    });
    
    this.route.navigate([""]);
  }

}
