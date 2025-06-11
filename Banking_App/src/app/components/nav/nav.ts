import { Component, Input } from '@angular/core';
import { RouterModule, Router, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-nav',
  imports: [RouterModule, CommonModule,RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  title!: string;
  path!: string;
  @Input() items: Array<{ title: string; path: string }> = [];

  constructor(private route: Router) {}

  handelLogout() {
    this.route.navigate(['/']);
  }
}
