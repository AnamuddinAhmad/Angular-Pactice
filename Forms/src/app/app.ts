import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveForms } from './reactive-forms/reactive-forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveForms],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Forms';
}
