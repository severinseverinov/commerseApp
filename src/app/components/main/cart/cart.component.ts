import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cart:Cart,private router:Router) { }

  ngOnInit(): void {

  }
//routing işlemleri
  gotoMain(){
    localStorage.setItem('isMain','true');
    // console.log('main ',this.isMain);
    this.router.navigateByUrl('/main');
  }
  gotoBuy(){
    localStorage.setItem('isMain','false');
    // console.log('main ',this.isMain);
    this.router.navigateByUrl('/buy');
  }


}
