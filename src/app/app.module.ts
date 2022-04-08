import { AdminComponent } from './components/admin/admin.component';
import { CartComponent } from './components/main/cart/cart.component';
import { MainModule } from './components/main/main.module';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { BuyComponent } from './components/main/buy/buy.component';
import { ProductComponent } from './components/main/product/product.component';
import { AuthComponent } from './components/admin/auth/auth.component';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MainModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'main',pathMatch:'full'},
      {path:'main',component:MainComponent},
      {path: 'admin',
      loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)},
      {path:'cart',component:CartComponent},
      {path:'buy',component:BuyComponent},
      {path:'product',component:ProductComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


