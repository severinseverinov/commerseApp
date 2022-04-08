import { User } from './../models/user.model';
import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";



@Injectable()
export class UsersService{

  //usre servisi
  baseUrl:string="http://localhost:3000/";

constructor(private http:HttpClient){}

getUsers():Observable<User[]>{
  return this.http.get<User[]>(this.baseUrl+'signupUsers');
}

addUsers(user:any):Observable<any>{
  return this.http.post<any>(this.baseUrl+'signupUsers',user);
}
}
