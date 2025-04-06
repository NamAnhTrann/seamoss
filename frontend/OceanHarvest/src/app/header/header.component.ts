import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 mobileMenuOpen: boolean = false;
 isScroll: boolean = false;
 isHomePage: boolean = false;
 isErrorPage: boolean = false;
 isLoginPage: boolean = false;



 constructor(private router: Router){
  this.router.events.subscribe(()=>{
    this.isHomePage = this.router.url === '/';
    this.isErrorPage = this.router.url === "/error-page"
    this.isLoginPage = this.router.url === "/login"
  });
 }

  @HostListener("window:scroll", [])
  onWindowScroll(){
    this.isScroll = window.scrollY > 10;
  }

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }


}
