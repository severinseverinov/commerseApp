import { OrderRep } from './../../../models/order.rep';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  public orderForm!:FormGroup;
  orderSent=false;

  constructor(public order:Order,private router:Router,private fb:FormBuilder,private orderRep:OrderRep) {

  }

  //sipariş formu
  ngOnInit(): void {
    this.orderForm=this.fb.group({
      firstname:[localStorage.getItem('firstname'),Validators.required],
      lastname:[localStorage.getItem('lastname'),Validators.required],
      phone:[localStorage.getItem('userPhone'),Validators.required],
      email:[localStorage.getItem('userEmail'),Validators.email],
      address:[null,Validators.required],
      city:[null,Validators.required],
      zip:[this.order,Validators.required]
    });
  }

  gotoMain(){
    localStorage.setItem('isMain','true');
    // console.log('main ',this.isMain);
    this.router.navigateByUrl('/main');
  }
//sipariş kayıt komutları
  buyNow(){
    this.orderRep.saveOrders(this.orderForm.value).subscribe(
      (order)=>{
        this.orderSent=true;
        this.order.clearOrder();
        this.orderForm.reset();
      }
    );
  }

}
