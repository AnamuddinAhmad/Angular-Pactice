import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-comp-login',
  imports: [FormsModule,RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComp {

  constructor(){}
}
