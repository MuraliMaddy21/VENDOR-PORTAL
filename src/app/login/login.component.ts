import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  vendorid:any="";
  password:any="";
  json:any=""
  result:any=""
  status:any=""
  x:any="";
  gotp:any="";
  lotp:any="";
  json2:any="";
 


  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }


  validate()
  {

  if(this.vendorid=='' && this.password=='')
  {
   window.alert("Please enter password and Vendor-ID");
  }
  else if(this.vendorid=='')
  {
    window.alert("Please enter Vendor-ID")
  }
  else if(this.password=='')
  {
    window.alert("Please enter Password")
  }
  else if(this.gotp=='')
  {
    window.alert("Please enter the OTP")
  }
  else
  {
   
   this.json={
    "vendorid":this.vendorid,
    "password":this.password,
   }

   
 
  
   console.log(this.json)
   this.http.post('http://localhost:3030/login',this.json,{responseType:'json'}).subscribe((response=>
   {
      this.result = response
      console.log(this.result)
      //console.log(this.result['Envelope']['Body']['ZFM_LOGIN_VP_MD.Response']['E_MESSAGE'].toString())
      this.status=this.result['Envelope']['Body']['ZFM_LOGIN_VP_MD.Response']['E_MESSAGE']
      if(this.status == 'S' && this.gotp==this.lotp)
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

  myFunction()
  {

    this.x=document.getElementById("myInput");
    if(this.x.type==="password")
    {
      this.x.type="text"
    }
    else{
      this.x.type="password"
    }

  }

  getOtp()
  {
    this.lotp = 0;
    var digits = '0123456789';
  
    for(let i=0;i<6;i++)
    {
      this.lotp += digits[Math.floor(Math.random()*10)]
    }
    console.log(this.lotp);
    window.alert("OTP SENT SUCCESSFULLY")
    this.json2=
    {
      "otp":this.lotp
    }
    this.http.post('http://localhost:3030/otp',this.json2,{responseType:'json'}).subscribe((response)=>
   {
      this.result = response
      console.log(this.result)
   })

    return this.lotp

  }
  
  
}

      
  

