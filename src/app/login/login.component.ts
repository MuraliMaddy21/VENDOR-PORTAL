import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  vendorid:any=""
  password:any="";
  json:any
  result:any
  status:any
 


  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }


  validate()
  {
   this.json={
    "vendorid":this.vendorid,
    "password":this.password
   }
   console.log(this.json)
   this.http.post('http://localhost:3030/login',this.json,{responseType:'json'}).subscribe((response=>
   {
      this.result = response
      console.log(this.result)
      //console.log(this.result['Envelope']['Body']['ZFM_LOGIN_VP_MD.Response']['E_MESSAGE'].toString())
      this.status=this.result['Envelope']['Body']['ZFM_LOGIN_VP_MD.Response']['E_MESSAGE']
      if(this.status == 'S')
      {
         window.alert("Login Successful")
        this.route.navigate(["/dashboard"]);
      }
      else
      {
        window.alert("Incorrect Credentials!Please Check")
      }

   }))
   

  }
}

      
  

