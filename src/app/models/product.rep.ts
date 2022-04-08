import { Category } from './category.model';
import { ProductsService } from './../services/products.service';
import { Injectable, OnInit } from '@angular/core';
import { Product } from './product.model';
import { Post } from './post.model';


@Injectable()
export class ProductRep implements OnInit{

  private products:Product[]=[];
  private product:any;
  private posts:Post[]=[];
  private categories:Category[]=[];
  private productId:any;

  constructor(private productSer: ProductsService){


    this.productSer.getProducts()
    .subscribe(product=>{this.products=product;});

    this.productSer.getPosts()
    .subscribe(post=>{this.posts=post});

    this.productSer.getCategory()
    .subscribe(category=>this.categories=category);


  }

  ngOnInit(): void {

  }

  getProduct(productId:number):any{
    return this.products.find(i=>i.productId==productId);
  }

  getProductById(Id:number):any{
    return this.products.find(i=>i.id==Id);
  }

  getPosts(productId:number):any{
    return this.posts.filter(i=>i.porductId==productId);
  }

  getProducts(category?:Category):Product[]{
    if(category)
      return this.products.filter(prd=>prd.category==category?.category);
    else
      return this.products;
  }

  getCategory(id:number):any{
    return this.categories.find(i=>i.id===id);
  }

  getCategories():Category[]{
    return this.categories;
  }

  saveProduct(id:number,product:any){
    if(id==0){
      this.productSer.addProduct(product).subscribe(prd=>
        this.products.push(prd));
    }else{
      this.productSer.updateProduct(id,product);
    }
  }

  deleteProduct(product:Product){
    this.productSer.delProduct(product);
  }


}
