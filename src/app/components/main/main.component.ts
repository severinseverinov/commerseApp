import { Router } from '@angular/router';
import { Category } from './../../models/category.model';
import { Product } from './../../models/product.model';
import { ProductRep } from './../../models/product.rep';
import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRep } from 'src/app/models/user.rep';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  //gerekli değişkenlerin tanımlanması
  public selectedCtg?:Category;
  public prdOfPage=15;
  public selectedPage=1;
  public selectedProduct:any;
  public user:any;

  public isList=false;

  public isLogin:boolean=false;
  public isSignUp:boolean=false;
  public signupForm!:FormGroup;
  public loginForm!:FormGroup;


  constructor(private productRep:ProductRep,private userRep:UserRep,private cart:Cart,private router:Router,private fb:FormBuilder) { }



  ngOnInit(): void {

    //main altında kullanıcı giriş ve kayıt ol form değişkenlerinin atamaları
    this.isLogin=localStorage.getItem('login')=='true';


    this.loginForm=this.fb.group({
      username:[null,Validators.required],
      password:[null,Validators.required]
    })

    this.signupForm=this.fb.group({
      username:[null,Validators.required],
      firstname:[null,Validators.required],
      lastname:[null,Validators.required],
      phone:[null,Validators.required],
      genre:[null,Validators.required],
      email:[null,Validators.email],
      password:[null,Validators.required]
    });

  }

  //kayıt olma işlemi
  signUp(){
    this.userRep.addUser(this.signupForm.value).subscribe();

    alert('Signup successfull!');
    this.signupForm.reset();
    this.isSignUp=false;

  }

  //user giriş işlemi ve localstorageye kayıtlar
  loginUp(){
    this.user=this.userRep.getUser(this.loginForm.value.username,this.loginForm.value.password);
    console.log(this.user);
    if(this.user){
      localStorage.setItem('login','true');
      localStorage.setItem('userId',this.user.userId);
      localStorage.setItem('firstname',this.user.firstname);
      localStorage.setItem('lastname',this.user.lastname);
      localStorage.setItem('userPhone',this.user.phone);
      localStorage.setItem('userEmail',this.user.email);
      alert('Login success!');
      this.loginForm.reset();
      this.isLogin=true;
    }else{
      alert('User not found! Please check your informations.');
      this.loginForm.reset();
    }

  }

  //çıkış işlemi
  signOut(){
    localStorage.setItem('login','false');
    this.isLogin=false;
    localStorage.setItem('isSignUp','false');
    this.isSignUp=false;
  }

  singUp(){
    this.isSignUp=true;
  }

  signIn(){
    this.isSignUp=false;
  }


  //productların repodan çekilmesi
  get products():Product[]{
    let i=(this.selectedPage-1)*(this.prdOfPage);
    return this.productRep.getProducts(this.selectedCtg).slice(i,i+this.prdOfPage);
  }
//categorylerin repodan çekilmesi
  get categories(){
    return this.productRep.getCategories();
  }

  //görüntüleme biçimi
  showList(){
    this.isList=true;
  }

  showBlock(){
    this.isList=false;
  }

  //kategory seçimi
  selectCategory(ctg?:Category){
    this.selectedCtg=ctg;
  }


  //sayfalamada sayfanın değiştirilmesi
  changeSelectedPage(chSelectedPage:number){
    this.selectedPage=chSelectedPage;
  }

  //sayfalama buton kodları
  get Pages():number[]{
    return Array(Math.ceil(this.productRep.getProducts(this.selectedCtg).length/this.prdOfPage))
    .fill(0)
    .map((x,i)=>i+1);
  }

  //sepete ekle
  addToChart(product:Product){
    this.cart.addItem(product);
    localStorage.setItem('isMain','false');
    this.router.navigate(['cart']);
  }

//routing işlemi
  titleClick(item:any){
    this.selectedProduct=item;
    localStorage.setItem('isMain','false');
    localStorage.setItem('productId',this.selectedProduct.productId);
    this.router.navigate(['product']);
  }

}
