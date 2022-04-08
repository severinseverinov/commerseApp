export class Post{
  id:number;
  porductId:number;
  postTitle:string;
  rate:number;
  post:string;


  constructor(id:number,productId:number,postTitle:string,rate:number,post:string){
    this.id=id;
    this.porductId=productId;
    this.postTitle=postTitle;
    this.rate=rate;
    this.post=post;

  }
}
