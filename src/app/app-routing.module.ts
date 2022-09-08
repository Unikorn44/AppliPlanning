import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

// Component
import { AccueilComponent } from './pages/accueil/accueil.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AuthGuardService } from './guard/AuthGuardService';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'accueil', component: AccueilComponent, canActivate: [AuthGuardService] },
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuardService]},
  { path: 'profil', component: ProfilComponent, canActivate: [AuthGuardService]},
  { path: 'planning', component: PlanningComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
