import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  // admin login işlemleri

  //login form tanımlaması
  public loginForm!:FormGroup;

//localden admin token'in çekilmesi
  constructor(private http:HttpClient,private fb: FormBuilder,  private router:Router) {
    if(localStorage.getItem('adminToken')){
      this.router.navigate(['admin/adminMain']);
    }
  }

//form validasyon
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:[null,Validators.required],
      password:[null,Validators.required]
    })
  }

  //json servera istek atılıp bilgilerin karşılaştırılması ve login işlemi
  loginUp(){
    this.http.get<any>("http://localhost:3000/admin")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
      return a.username==this.loginForm.value.username && a.password==this.loginForm.value.password
    });

    if(user){

      localStorage.setItem('adminToken',user.token);
      alert('Login success!');
      this.loginForm.reset();
      this.router.navigate(['admin/adminMain']);
    }else{
      alert('User not found! Please check your informations.');
      this.loginForm.reset();
    }
    })
  }

  //admin girişi yapmak istemiyorsa geri dönüş.
  gotoMain(){
    localStorage.removeItem('adminToken');
    localStorage.removeItem('AdminLogin');
    localStorage.setItem('isMain', 'true');
    localStorage.removeItem('login');
    this.router.navigate(['main']);
  }

}
