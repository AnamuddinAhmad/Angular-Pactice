import { Component } from '@angular/core';
import {RouterModule} from "@angular/router"
@Component({
  standalone:true,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports:[RouterModule]
  // Yahan standalone: true NAHI hona chahiye
})
export class AppComponent {
  title = 'second';
}
