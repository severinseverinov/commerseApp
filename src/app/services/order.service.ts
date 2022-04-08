import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
import { Order } from '../models/order.model';

@Injectable()
export class OrderService{

  //order servisi
  baseUrl:string="http://localhost:3000/";

constructor(private http:HttpClient){}

saveOrder(order:Order):Observable<Order>{
  return this.http.post<Order>(this.baseUrl+'soldProducts',order);
}

}
