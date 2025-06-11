import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { User } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-comp-login',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComp {
  submitted = false;
  sucess = false;
  loginData = {
    email: '',
    password: '',
  };
  constructor(public userServices: User, private router: Router) {}
  handelLogin(data: NgForm) {
    console.log(this.loginData);
    let existUser = this.userServices.findByEmail(this?.loginData?.email);

    try {
      if (existUser.password == this.loginData.password) {
        this.router.navigate(['/dashboard', existUser?.email]);
      } else {
        this.sucess = true;
      }
    } catch (error) {
      this.submitted = true;
      this.sucess = true;
      console.log('Its working');
    }
    setTimeout(() => {
      this.sucess = false;
    }, 3000);
  }
}
