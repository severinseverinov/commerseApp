import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()
export class Order{
  public id!:number;
  public name!:string;
  public surname!:string;
  public address!:string;
  public city!:string;
  public phone!:string;
  public email!:string;

  public isSent:boolean=false;
  constructor(public cart:Cart){

  }

  clearOrder(){
    this.id=0;
    this.name='';
    this.surname='';
    this.address='';
    this.city='';
    this.phone='';
    this.email='';
    this.isSent=false;
    this.cart.clearCart();
  }
}
