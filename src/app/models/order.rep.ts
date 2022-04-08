
import { Observable } from 'rxjs';
import { Order } from './order.model';
import { OrderService } from '../services/order.service';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderRep{
  private orders:Order[]=[];

  constructor(private orderSer:OrderService){}

  getOrders():Order[]{
    return this.orders;
  }

  saveOrders(order:Order):Observable<Order>{
    return this.orderSer.saveOrder(order);
  }

}
