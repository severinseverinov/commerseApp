import { Admin } from './../models/admin.model';
import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";



@Injectable()
export class AdminService{

  //admin servisi
  constructor(){}

  getToken() {
    return localStorage.getItem('adminToken');
  }

  get isLoggedIn(): boolean {
    let authToken = this.getToken();
    return authToken !== null ? true : false;
  }
}
