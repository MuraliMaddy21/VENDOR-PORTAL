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

  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3030/purord',{responseType:'json'}).subscribe((data)=>
    {
      this.result = data
      this.items = this.result['Envelope']['Body']['ZFM_PURORD_MURALI.Response']['IT_PV']['item']
      console.log(this.items)
      //console.log(this.result)

    })
  }

}
