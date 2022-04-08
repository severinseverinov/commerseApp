import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { ModelModule } from '../../models/model.module';
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { BuyComponent } from './buy/buy.component';
import { ProductComponent } from './product/product.component';



@NgModule({
  imports:[ModelModule,BrowserModule,FormsModule,RouterModule,ReactiveFormsModule],
  declarations:[MainComponent, NavbarComponent, CartComponent, BuyComponent, ProductComponent],
  exports:[MainComponent,CartComponent, BuyComponent, ProductComponent]
})

export class MainModule{}
