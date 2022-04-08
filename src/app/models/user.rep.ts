import { User } from './user.model';
import { UsersService } from './../services/user.service';
import { Injectable, OnInit } from '@angular/core';




@Injectable()
export class UserRep implements OnInit{
  private users:User[]=[];
  private user:any;

  constructor(private userSer:UsersService){
    this.userSer.getUsers()
    .subscribe(user=>{this.users=user;});
  }

  ngOnInit(): void {

  }

  getUser(username:string,password:string):any{
    return this.users.find(i=>i.username==username && i.password==password);
  }

  getUsers():User[]{
    return this.users;
  }

  addUser(user:any):any{

    return this.userSer.addUsers(user);
  }

}
