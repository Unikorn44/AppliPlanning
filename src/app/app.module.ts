import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './molecules/navbar/navbar.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { EventcardComponent } from './molecules/eventcard/eventcard.component';
import { DailyWeatherComponent } from './molecules/daily-weather/daily-weather.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccueilComponent,
    NavbarComponent,
    EventcardComponent,
    DailyWeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
