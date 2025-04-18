import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
  {path: "", component:HomepageComponent},
  {path: "contact-us", component: ContactUsPageComponent},
  {path: "aboutUs-page", component: AboutUsPageComponent},
  {path: "login-page", component: LoginPageComponent},


];
