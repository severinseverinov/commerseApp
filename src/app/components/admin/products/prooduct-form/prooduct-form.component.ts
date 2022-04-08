import { Product } from './../../../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms'
import { ProductRep } from 'src/app/models/product.rep';

@Component({
  selector: 'app-prooduct-form',
  templateUrl: './prooduct-form.component.html',
  styleUrls: ['./prooduct-form.component.css']
})
export class ProoductFormComponent implements OnInit {

  //yeni bir product kaydetmek yada var olanı değiştirmek için kullanılır.
  public edit=false;
  product:Product=new Product();
  public saveForm!:FormGroup;

  constructor(private activeRouter:ActivatedRoute,private fb:FormBuilder,private productRep:ProductRep,private router:Router) {
    this.edit=this.activeRouter.snapshot.params['mode']=='edit';
    if(this.edit){
      this.product=this.productRep.getProductById(parseInt(this.activeRouter.snapshot.params['id']));

   }
  }

  ngOnInit(): void {
    //form valisyonlarının oluşturulması
      this.saveForm=this.fb.group({
      title:[this.product.title,Validators.required],
      description:[this.product.description,Validators.required],
      price:[this.product.price,Validators.required],
      image:[this.product.image,Validators.required],
      category:[this.product.category,Validators.required],
      productId:[this.product.productId,Validators.required],

    });

}

  //kaydetme yada update işlemi

  //edit için farkı bir tanımlama ve yeni kayır için farklı bir bilgi gönderimi

  save(){
    if(this.edit){this.productRep.saveProduct(this.product.id,this.saveForm.value);}
    {this.productRep.saveProduct(0,this.saveForm.value);}
    this.router.navigateByUrl('/admin/adminMain/products');

  }

  hasUnsavedChanges(): boolean {
    return !this.saveForm.pristine && this.saveForm.dirty;
}

}
