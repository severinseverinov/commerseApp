import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import { ProductRep } from 'src/app/models/product.rep';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // product değişkenleri
  public product!:any;
  public posts!:any;
  public productId:any;


  constructor(private productRep:ProductRep,private cart:Cart,private router:Router) {
    this.productId=localStorage.getItem('productId');
    this.product=this.productRep.getProduct(parseInt(this.productId));

    this.posts=this.productRep.getPosts(this.productId);


   }

  ngOnInit(): void {
  }
  //product'ın sepete eklenmesi
  addToChart(product:Product){
    this.cart.addItem(product);
    localStorage.setItem('isMain','false');
    this.router.navigate(['cart']);
  }

}
