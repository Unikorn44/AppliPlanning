import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.scss']
})
export class DailyWeatherComponent implements OnInit {

  public meteoData: any;
  public ville: String = "paris";

  ngOnInit(): void {
    this.meteoWidget();
  }

  public meteoWidget(){
    let dataJSON = $.getJSON("https://www.prevision-meteo.ch/services/json/" + this.ville , (data) =>{
      this.meteoData = data.fcst_day_0;
    });
  }


}
