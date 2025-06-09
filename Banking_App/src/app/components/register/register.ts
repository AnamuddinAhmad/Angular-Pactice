import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-comp-register',
  imports: [RouterModule, FormsModule, ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComp {}
