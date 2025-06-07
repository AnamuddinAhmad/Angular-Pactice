import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-display',
  imports: [CommonModule],
  templateUrl: './display.html',
  styleUrl: './display.css'
})
export class Display {
  @Input() count!: number;
 
}
