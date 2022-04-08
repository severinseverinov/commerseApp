import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector:'app-admin',
  templateUrl:'admin.component.html'
})

export class AdminComponent{
  constructor(private router:Router){}

  ngOnInit(
  ){this.router.navigate(['/admin/adminMain/products']);}

  //maain sayfa yönlendirmesi
  gotoMain(){
    localStorage.setItem('isMain', 'true');
    this.router.navigate(['main']);
  }

  //çıkışta storage içi itemlerin silinmesi ve yönlendirme
  logout(){
    localStorage.removeItem('adminToken');
    localStorage.removeItem('AdminLogin');
    localStorage.setItem('isMain', 'true');
    localStorage.removeItem('login');
    this.router.navigate(['admin']);
  }
}
