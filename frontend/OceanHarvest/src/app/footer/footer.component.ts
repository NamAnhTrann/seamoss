import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  Istoday = Date.now()
  isErrorPage: boolean = false;
  isLoginpage: boolean = false;
  isContactPage: boolean = false;

 constructor(private router: Router){
  this.router.events.subscribe(()=>{
    this.isLoginpage = this.router.url === "/login"
    this.isErrorPage = this.router.url === '/error-page';
    this.isContactPage = this.router.url === '/contact-us';
  });
 }

}
