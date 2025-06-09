import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Banking_App';
 
}
