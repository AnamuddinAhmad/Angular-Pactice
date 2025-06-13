import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environments } from '../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  city!: string;
  API_KEY!: string;
  constructor(private http: HttpClient) {}

  getWeatherData(city: string): Observable<any> {
    this.city = city;
    this.API_KEY = environments.API_KEY;
    let baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.API_KEY}&units=metric`;

    return this.http.get(baseUrl).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }
}
