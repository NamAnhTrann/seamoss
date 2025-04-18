import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
@Injectable({
  providedIn: 'root'
})
export class DbService {

  private localUrl = "http://localhost:3030";
  private onlineUrl = "http://3.107.97.50:3030";

  constructor(private http:HttpClient, private router: Router){}


  addContactMessage(contactMessage: any){
    return this.http.post(`${this.onlineUrl}/add/contact/api`, contactMessage, httpOptions)
  }
}
