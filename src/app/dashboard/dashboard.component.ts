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
  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {
 
    this.http.get("http://localhost:3030/profile",{responseType:'json'}).subscribe((response)=>
    {
      console.log(response)
      this.result = response
      this.name = this.result['Envelope']['Body']['ZFM_PROFILE_VP_MD.Response']['E_VEN_PROFILE'].NAME
      this.vendorid = this.result['Envelope']['Body']['ZFM_PROFILE_VP_MD.Response']['E_VEN_PROFILE'].VENDOR
      this.street = this.result['Envelope']['Body']['ZFM_PROFILE_VP_MD.Response']['E_VEN_PROFILE'].STREET
      this.country = this.result['Envelope']['Body']['ZFM_PROFILE_VP_MD.Response']['E_VEN_PROFILE'].COUNTRY
      this.state = this.result['Envelope']['Body']['ZFM_PROFILE_VP_MD.Response']['E_VEN_PROFILE'].STATE
      this.telenum = this.result['Envelope']['Body']['ZFM_PROFILE_VP_MD.Response']['E_VEN_PROFILE'].TELENUM
      this.city = this.result['Envelope']['Body']['ZFM_PROFILE_VP_MD.Response']['E_VEN_PROFILE'].CITY
  });
  }
}
