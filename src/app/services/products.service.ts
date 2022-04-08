import { Product } from './../models/product.model';
import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
import { Category } from '../models/category.model';
import { Post } from '../models/post.model';


@Injectable()
export class ProductsService{

  //product servisi
  baseUrl:string="http://localhost:3000/";

constructor(private http:HttpClient){}

getProducts():Observable<Product[]>{
  return this.http.get<Product[]>(this.baseUrl+'products');
}
getPosts():Observable<Post[]>{
  return this.http.get<Post[]>(this.baseUrl+'posts');
}

getCategory():Observable<Category[]>{
  return this.http.get<Category[]>(this.baseUrl+'categories');
}

addProduct(product:Product):Observable<Product>{
  return this.http.post<Product>(this.baseUrl+'products',product);
}

updateProduct<T>(id:number,product:Product):Observable<T>{
  return this.http.put<T>(this.baseUrl+'products/'+id,product);
}
delProduct<T>(product:Product):Observable<T>{
  return this.http.delete<T>(this.baseUrl+'products/'+product.id);
}

}
