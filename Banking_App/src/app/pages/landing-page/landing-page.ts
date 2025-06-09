import { Component } from '@angular/core';
import { Nav } from '../../components/nav/nav';
import { LandingPageComponent } from '../../components/landing-page/landing-page';

@Component({
  standalone: true,
  selector: 'app-landing-page',
  imports: [Nav, LandingPageComponent],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
  items = [
    { title: 'Login', path: '/login' },
    { title: 'Register', path: '/register' },
  ];
}
