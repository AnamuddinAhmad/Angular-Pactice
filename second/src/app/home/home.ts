import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  welcome = 'Welcome to Our Website!';
  logoPath: string = 'assets/bsit-final-logo.png';
}
