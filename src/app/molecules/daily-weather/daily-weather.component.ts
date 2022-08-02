import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { pairs } from 'rxjs';

@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.scss']
})
export class DailyWeatherComponent implements OnInit {

  //private ville = "paris";

  constructor() { }

  ngOnInit(): void {
  }

  public meteoWidget(){
    console.log("it's a trap !");

    let dataJSON = $.getJSON('https://www.prevision-meteo.ch/services/json/paris', function(data){
      let today = data.fcst_day_0;
      console.log(today);
      console.log("paris");
      console.log(today.date);
      console.log('Entre : ' + today.tmin + '°' + ' et ' + today.tmax + '°');
      console.log(today.condition);
      console.log(today.icon);
    });

    console.log(dataJSON);
    



  }
}
