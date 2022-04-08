export class Admin{
  id:number;
  username:string;
  password:string;
  mail:string
  token:string;



  constructor(id:number,username:string,password:string,mail:string,token:string){
    this.id=id;
    this.username=username;
    this.password=password;
    this.mail=mail;
    this.token=token;

  }
}
