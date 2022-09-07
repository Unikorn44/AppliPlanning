import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.scss']
})
export class DailyWeatherComponent implements OnInit {

  // !!! PENSER A MODIFIER VILLE !!!
  public meteoData: any;
  public dataJSON: any;
  public ville: string = localStorage.getItem('city') || '';

  ngOnInit(): any {
    this.meteoWidget();
  }


  public meteoWidget(){
    let dataJSON = $.getJSON("https://www.prevision-meteo.ch/services/json/" + this.ville , (data) =>{
      this.meteoData = data.fcst_day_0;
    });
  }


}
