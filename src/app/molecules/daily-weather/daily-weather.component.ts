import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.scss']
})
export class DailyWeatherComponent implements OnInit {

  public meteoData: any;


  ngOnInit(): void {
    console.log("I haz test");
    this.meteoWidget();
  }


  public meteoWidget(){
    console.log("it's a trap !");

    let dataJSON = $.getJSON('https://www.prevision-meteo.ch/services/json/paris', (data) =>{
      let today = data.fcst_day_0;
      console.log(today);
      console.log("paris");
      console.log(today.date);
      console.log('Entre : ' + today.tmin + '°' + ' et ' + today.tmax + '°');
      console.log(today.condition);
      console.log(today.icon);
      this.meteoData = today;
      console.log("I haz 1! " + this.meteoData);
    });

    console.log("I haz 2 ! " + this.meteoData);
  }




}
