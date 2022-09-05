import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AccueilComponent } from './pages/accueil/accueil.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonComponent } from './atomes/button/button.component';
import { CalendarComponent } from './molecules/calendar/calendar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactCardComponent } from './molecules/contact-card-list/contact-card/contact-card.component';
import { ContactCardListComponent } from './molecules/contact-card-list/contact-card-list.component';
import { DayEventComponent } from './molecules/calendar/list-day-event/day-event/day-event.component';
import { DayEventDetailsComponent } from './molecules/day-event-details/day-event-details.component';
import { DailyWeatherComponent } from './molecules/daily-weather/daily-weather.component';
import { EventDetailsComponent } from './molecules/event-details-list/event-details/event-details.component';
import { EventDetailsListComponent } from './molecules/event-details-list/event-details-list.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ListDayEventComponent } from './molecules/calendar/list-day-event/list-day-event.component';
import { ListPlanningContactComponent } from './molecules/list-planning-contact/list-planning-contact.component';
import { NavbarComponent } from './molecules/navbar/navbar.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { PlanningContactComponent } from './molecules/list-planning-contact/planning-contact/planning-contact.component';
import { SidebarComponent } from './molecules/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/AuthService';
import { AuthInterceptor } from './services/AuthInterceptor';

@NgModule({
  declarations: [
    AccueilComponent,
    AppComponent,
    ContactComponent,
    ContactCardComponent,
    ContactCardListComponent,
    DailyWeatherComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    ButtonComponent,
    LoginComponent,
    ProfilComponent,
    PlanningComponent,
    CalendarComponent,
    ListDayEventComponent,
    DayEventComponent,
    ListPlanningContactComponent,
    PlanningContactComponent,
    DayEventDetailsComponent,
    EventDetailsListComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    {provide:HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
