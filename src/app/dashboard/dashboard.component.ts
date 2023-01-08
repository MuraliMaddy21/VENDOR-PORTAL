import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name:any="";
  vendorid:any=""
  street:any=""
  city:any=""
  district:any=""
  state:any=""
  country:any=""
  telenum:any=""
  result:any
  time:any;
  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {

    let date:Date= new Date()
    this.time=date;

 
    this.http.get("http://localhost:3030/profile",{responseType:'json'}).subscribe((response)=>
    {
      console.log(response)
      this.result = response
      this.vendorid = this.result['Envelope']['Body']['ZFM_PROFILE_VP_MD.Response']['E_VEN_PROFILE'].VENDOR
      if(this.vendorid=="")
      {
        window.alert("Looks Like You haven't Logged in!Redirecting to login page")
        this.route.navigate([""]);
      }
      else{
      this.name = this.result['Envelope']['Body']['ZFM_PROFILE_VP_MD.Response']['E_VEN_PROFILE'].NAME
      this.street = this.result['Envelope']['Body']['ZFM_PROFILE_VP_MD.Response']['E_VEN_PROFILE'].STREET
      this.country = this.result['Envelope']['Body']['ZFM_PROFILE_VP_MD.Response']['E_VEN_PROFILE'].COUNTRY
      this.state = this.result['Envelope']['Body']['ZFM_PROFILE_VP_MD.Response']['E_VEN_PROFILE'].STATE
      this.telenum = this.result['Envelope']['Body']['ZFM_PROFILE_VP_MD.Response']['E_VEN_PROFILE'].TELENUM
      this.city = this.result['Envelope']['Body']['ZFM_PROFILE_VP_MD.Response']['E_VEN_PROFILE'].CITY
      }
  });
  }

shutdown()
{
  this.http.get('http://localhost:3030/shutdown',{responseType:'json'}).subscribe((data)=>
  {
    
  });
  
  this.route.navigate([""]);
}

}
