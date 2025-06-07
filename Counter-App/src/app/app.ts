import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Button } from './button/button';
import { Display } from './display/display';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, Display,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Counter-App';
  
  color: string = 'green';
  count = 0;
  handelCounter(type: string): void {
    if (type === 'increment') {
      this.count++;
    } else if (type === 'decerement') {
      this.count--;
    } else {
      this.count = 0;
    }
  }
}
