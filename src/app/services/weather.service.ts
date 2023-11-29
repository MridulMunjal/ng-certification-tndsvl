import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EMPTY, Observable, catchError, shareReplay } from 'rxjs';
// import { environment } from 'src/environments/env';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
  private baseForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?zip=';
  private urlSuffix = "&APPID=5a4b2d457ecbef9eb2a71e480b947604";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {

  }
  loadWeatherByZipCode(zipCode: number): Observable<any> {
    if (zipCode > 0) {
      return this.http.get(this.baseWeatherURL + zipCode + this.urlSuffix)
        .pipe(catchError(err => {
          if (err.status === 404) {
            window.alert('Please enter the valid zipcode')
            console.log(`zip ${zipCode} not found`);
            return EMPTY
          }
        })
        );
    }
  }
  loadWeatherForecast(zipCode: number): Observable<any> {
    if (zipCode > 0) {
      return this.http.get(this.baseForecastURL + zipCode + this.urlSuffix)
        .pipe(catchError(err => {
          if (err.status === 404) {
            window.alert('Please enter the valid zipcode')
            console.log(`zip ${zipCode} not found`);
            return EMPTY
          }
        })
        );
    }
  }

}
