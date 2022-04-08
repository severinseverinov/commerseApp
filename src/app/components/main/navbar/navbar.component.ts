import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  public isMain=false;
  public isLogin=false;

  constructor(private router:Router) {
    const x=localStorage.getItem('isMain');
    if(x=='true'){this.isMain=true;}
    else{this.isMain=false;}
    console.log(this.isMain);

    this.isLogin = localStorage.getItem('login')=='true';

   }

  ngOnInit(): void {

  }

  //routing işlemleri
  gotoCart(){
    localStorage.setItem('isMain','false');
    // console.log('navbar ',this.isMain);
    this.router.navigateByUrl('/cart');
  }

  gotoMain(){
    localStorage.setItem('isMain','true');
    // console.log('main ',this.isMain);

    this.router.navigateByUrl('/main');
  }

  signOut(){
    localStorage.setItem('login','false');
    this.isLogin=false;
    this.router.navigateByUrl('/main');
  }


}
