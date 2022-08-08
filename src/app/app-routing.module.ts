import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

// Component
import { AccueilComponent } from './pages/accueil/accueil.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { PlanningComponent } from './pages/planning/planning.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profil', component: ProfilComponent},
  { path: 'planning', component: PlanningComponent}
];


@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
