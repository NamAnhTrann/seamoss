import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const routes: Routes = [
  {path: "", component:HomepageComponent},
  {path: "contact-us", component: ContactUsPageComponent},
  {path: "aboutUs-page", component: AboutUsPageComponent},
  {path: "login-page", component: LoginPageComponent},
  {path: "sign-up", component: SignUpComponent},
  {path: "reset-passord", component: ResetPasswordComponent},
  {path: "**", component: ErrorPageComponent}


];
