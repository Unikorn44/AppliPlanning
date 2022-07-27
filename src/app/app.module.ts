import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AccueilComponent } from './pages/accueil/accueil.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DailyWeatherComponent } from './molecules/daily-weather/daily-weather.component';
import { EventcardComponent } from './molecules/eventcard/eventcard.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './molecules/navbar/navbar.component';
import { SidebarComponent } from './molecules/sidebar/sidebar.component';
import { ButtonComponent } from './button/button.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
