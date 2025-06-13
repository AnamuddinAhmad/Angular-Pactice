import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherComponents } from './Components/weather/weather.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WeatherComponents],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Weather_Web_App';
}
