import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

// Component
import { AccueilComponent } from './pages/accueil/accueil.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'login', component: LoginComponent }
];


@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
