import { Component, inject } from '@angular/core';
import { WeatherService } from '../../Services/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather',
  imports: [CommonModule, FormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponents {
  city: string = '';
  WeatherData!: any;
  invalid = false;
  private weatherServices = inject(WeatherService);

  fetchWeather(city: string) {
    //Best approch
    this.weatherServices.getWeatherData(city).subscribe({
      next: (res) => {
        this.WeatherData = res;
        this.invalid = false;
        console.log('Response ', this.WeatherData);
      },
      error: (err) => {
        // this.WeatherData=
        this.invalid = true;
        console.log('Error ', err);
      },
    });
    // 2nd approch
    this.weatherServices.getWeatherData(city).subscribe((res) => {
      this.WeatherData = res;
    });
    //3rd Approch
    this.weatherServices.getWeatherData(city).subscribe(
      (res) => {
        this.WeatherData = res;
      },
      (err) => {
        console.log('Error is erro ');
      }
    );

    //4th Approch
    this.weatherServices.getWeatherData(city).subscribe((res) => {
      if (res) this.WeatherData = res;
      else console.log('Something went wrong');
    });
  }
}
