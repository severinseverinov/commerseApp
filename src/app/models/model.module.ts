
import { OrderRep } from './order.rep';
import { Cart} from './cart.model';
import { ProductRep } from './product.rep';
import { ProductsService } from './../services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { OrderService } from '../services/order.service';
import { Order } from './order.model';
import { AdminService } from '../services/admin.service';
import { UserRep } from './user.rep';
import { UsersService } from '../services/user.service';



@NgModule({
  imports:[HttpClientModule],
  providers:[ProductsService,OrderService,AdminService,UsersService,ProductRep,Cart,Order,OrderRep,UserRep]
})

export class ModelModule{}

//tüm modeller ve repolar tek bir modeul üzerinden taşındı
