import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class Cart{
  public items:CartItem[]=[];
  public itemAmount:number=0;
  public total:number=0;
  constructor(){}

  addItem(product:Product,quentity:number=1){
    let item=this.items.find(i=>i.product.id==product.id);
    if(item){
      item.quentity+=quentity;
    }else{
      this.items.push(new CartItem(product,quentity));
    }
    this.reFreshCart();
  }

  removeItem(id:number){
    let index=this.items.findIndex(i=>i.product.id==id);
    this.items.splice(index,1);
    this.reFreshCart();
  }

  clearCart(){
    this.items=[];
    this.itemAmount=0;
    this.total=0;
  }

  updateQuentity(product:Product,quentity:number){
    let item=this.items.find(i=>i.product.id==product.id);
    if(item){
      item.quentity=quentity;
    }

    this.reFreshCart();

  }

  reFreshCart(){
    this.itemAmount=0;
    this.total=0;

    this.items.forEach(i=>{
      this.itemAmount+=i.quentity;
      this.total+=(i.quentity*i.product.price);

    });
  }
}

export class CartItem{
  product:Product;
  quentity!:number;
  constructor(product:Product,quentity:number){
    this.product=product;
    this.quentity=quentity;
  }

}
