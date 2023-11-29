import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WeatherService } from '../services/weather.service';
@Component({
  selector: 'app-zip-list',
  templateUrl: './zip-list.component.html',
  styleUrls: ['./zip-list.component.css']
})
export class ZipListComponent implements OnInit {
  zipCode: string;
  forecastData: any;
  allForecast: any;
  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private weather: WeatherService) { }

  ngOnInit() {
    this.zipCode = this.activeRoute.snapshot.params['zipCode']
    if (this.zipCode.length) {
      let res$ = this.weather.loadWeatherForecast(parseInt(this.zipCode))
      res$.subscribe(data => {
        this.allForecast = data;
        data.zipCode = this.zipCode;
        this.forecastData = data?.list?.filter(f => f.dt_txt.includes("00:00:00"))
      });
    }
  }
  ngDoCheck() {
    this.forecastData?.forEach(
      (element) => {
        if (element?.weather.length && element?.weather[0]?.description.toLowerCase()?.includes('cloud')) {
          element.img = 'clouds'
        }
        else if (element?.weather.length && element?.weather[0]?.description.toLowerCase()?.includes('rain')) {
          element.img = 'rain'
        }
        else if (element?.weather.length && element?.weather[0]?.description.toLowerCase()?.includes('snow')) {
          element.img = 'snow'
        }
        else {
          element.img = 'sun'
        }
      });
  }

  goBack() {
    this.router.navigate(['/form'])
  }
}