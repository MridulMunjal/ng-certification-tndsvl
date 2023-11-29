import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-zip-form',
  templateUrl: './zip-form.component.html',
  styleUrls: ['./zip-form.component.css'],
})
export class ZipFormComponent implements OnInit {
  weatherData: any = new Array();
  constructor(private weather: WeatherService) { }
  zipCode = new FormControl('')
  ngOnInit() {
    if (localStorage.weather)
      this.weatherData = JSON.parse(localStorage.weather);
  }
  onSubmit() {
    if (this.zipCode.value) {
      let res$ = this.weather.loadWeatherByZipCode(parseInt(this.zipCode.value))
      res$.subscribe(data => {
        data.zipCode = this.zipCode.value;
        this.weatherData.push(data)
        if (this.weatherData?.length > 0) {
          this.weatherData?.forEach(
            (element, i) => {
              console.log(element)
              if (element?.weather[0]?.description?.toLowerCase().includes('cloud')) {
                element.img = 'clouds'
              }
              else if (element?.weather[0]?.description?.toLowerCase()?.includes('rain')) {
                element.img = 'rain'
              }
              else if (element?.weather[0]?.description?.toLowerCase()?.includes('snow')) {
                element.img = 'snow'
              }
              else {
                element.img = 'sun'
              }
            });
        }
        // this.zipCode.reset();
      });
      localStorage.weather = JSON.stringify(this.weatherData);
    }
    else {
      console.warn('Please enter the valid zipcode');
      window.alert('Please enter the valid zipcode')
    }
  }
  imgApply() {

  }
  hide(index: number) {
    this.weatherData.splice(index, 1);
  }
}