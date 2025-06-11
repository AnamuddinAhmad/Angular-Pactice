import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { User } from '../../services/user.service';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-comp-register',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComp {
  success = false;
  submitted = false;
  userData = {
    name: '',
    email: '',
    contactNumber: '',
    password: '',
  };

  constructor(private userServices: User) {}

  registerUser(data: any) {
    this.submitted = true;
    if (data.invalid) return;
    this.userServices.setUserRegister(this.userData);
    console.log('User Registered:', this.userServices.getUserRegister());
    this.success = true;
    data.resetForm();
    this.submitted = false;
    this.userData = {
      name: '',
      email: '',
      contactNumber: '',
      password: '',
    };
    console.log('Params ', data);
    setTimeout(() => {
      this.success = false;
    }, 3000);
  }
}
