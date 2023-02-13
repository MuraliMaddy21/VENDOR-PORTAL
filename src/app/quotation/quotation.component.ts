import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {

  items:any;
  result:any;
  time:any;
  filterdata:any="";
  spinner:any;

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


    this.http.get('http://localhost:3030/quotation',{responseType:'json'}).subscribe((data)=>
    {
      if (Response) {
        this.hideloader();
    }
      this.result = data
      console.log(this.result)
      this.items=this.result['Envelope']['Body']['ZFM_QUOTATION_MURALI.Response']['IT_QUOTATION']['item']
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
  hideloader()
  {
    this.spinner=document.getElementById('loading');
    this.spinner .style.display = 'none';
    
  }

}

