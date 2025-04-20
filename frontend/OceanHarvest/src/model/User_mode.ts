export class User{
  _id?:string;
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  userCreatedAt: Date;
  userLocation?:string;
  userPassword:string;


  constructor(){
    this.userEmail = '';
    this.userFirstName = '';
    this.userLastName = '';
    this.userCreatedAt = new Date();
    this.userLocation = '';
    this.userPassword = '';
  }
}
