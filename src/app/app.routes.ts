import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CadastroComponent } from './cadastro/cadastro.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent}
];
