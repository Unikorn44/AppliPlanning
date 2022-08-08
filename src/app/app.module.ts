import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AccueilComponent } from './pages/accueil/accueil.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonComponent } from './atomes/button/button.component';
import { DailyWeatherComponent } from './molecules/daily-weather/daily-weather.component';
import { EventcardComponent } from './molecules/eventcard/eventcard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './molecules/navbar/navbar.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { SidebarComponent } from './molecules/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AccueilComponent,
    AppComponent,
    DailyWeatherComponent,
    EventcardComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    ButtonComponent,
    LoginComponent,
    ProfilComponent,
    PlanningComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
