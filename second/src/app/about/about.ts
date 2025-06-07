import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  title = 'About Us';
  description =
    'We are passionate developers building modern web applications with Angular.';
  @Input() name!: string;
}
