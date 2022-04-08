import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AdminService } from "src/app/services/admin.service";

@Injectable()
export class AuthGuard implements CanActivate{

  //yetkisiz kişilerin /admin sekmesine girememesi için guard işlemi
  //eğer admin token atanmamışsa giriş yapılamaz.
  constructor(private router:Router,private adminSer:AdminService){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {

    if(!this.adminSer.isLoggedIn){
      alert('Please login first!');
      this.router.navigate(['admin']);
    }
    return true;
  }
}
