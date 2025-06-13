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
  }
}
