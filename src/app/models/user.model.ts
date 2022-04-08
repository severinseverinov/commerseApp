export class User{
  id:number;
  username:string;
  firstname:string;
  lastame:string;
  phone:number;
  genre:string;
  password:string;
  email:string
  token:string;



  constructor(id:number,username:string,firstname:string,lastname:string,password:string,email:string,phone:number,genre:string,token:string){
    this.id=id;
    this.username=username;
    this.firstname=firstname;
    this.lastame=lastname;
    this.password=password;
    this.phone=phone;
    this.genre=genre;
    this.email=email;
    this.token=token;

  }
}
