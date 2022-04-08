import { ProductRep } from 'src/app/models/product.rep';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prooduct-list',
  templateUrl: './prooduct-list.component.html',
  styleUrls: ['./prooduct-list.component.css']
})
export class ProoductListComponent implements OnInit {

  constructor(private productRep:ProductRep,private router:Router) { }

  ngOnInit(): void {
  }

  //productların repten çekilmesi ve edit veya new product routingleri
  getProducts():Product[]{
    return this.productRep.getProducts();
  }
  deleteProduct(product:Product){
     this.productRep.deleteProduct(product);
  }

  edit(id:number){
    this.router.navigate(['admin/adminMain/products/edit/'+id]);
  }

  newProduct(){
    this.router.navigate(['admin/adminMain/products/new/']);
  }




}
