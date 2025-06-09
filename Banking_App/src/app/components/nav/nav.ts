import { Component,Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-nav',
  imports: [RouterModule, CommonModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  title: string = 'login';
  path: string = 'login';
  @Input() items: Array<{ title: string; path: string }> = [];
}
