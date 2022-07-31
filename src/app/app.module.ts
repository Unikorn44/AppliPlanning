import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AccueilComponent } from './pages/accueil/accueil.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonComponent } from './molecules/atomes/button/button.component';
import { DailyWeatherComponent } from './molecules/daily-weather/daily-weather.component';
import { EventcardComponent } from './molecules/eventcard/eventcard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './molecules/navbar/navbar.component';
import { SidebarComponent } from './molecules/sidebar/sidebar.component';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
