import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route,Router } from '@angular/router';

@Component({
  selector: 'app-purord',
  templateUrl: './purord.component.html',
  styleUrls: ['./purord.component.css']
})
export class PurordComponent implements OnInit {

 items:any
 result:any
 time:any;
 filterdata:any="";
 spinner:any;

  constructor(private http:HttpClient,private route:Router) { }

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

    this.http.get('http://localhost:3030/purord',{responseType:'json'}).subscribe((data)=>
    {
      if (Response) {
        this.hideloader();
    }
      this.result = data
      this.items = this.result['Envelope']['Body']['ZFM_PURORD_MURALI.Response']['IT_PV']['item']
      console.log(this.items)
      //console.log(this.result)

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

