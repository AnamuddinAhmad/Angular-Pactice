import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserData } from '../user-data.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.html',
  styleUrls: ['./user-form.css'],
  providers: [],
})
export class UserForm {
  user = {
    id: null,
    name: '',
    email: '',
  };
  submitted = false;
  onSubmit() {
    this.submitted = true;
    this.userData.setData({...this.user});
    this.restoreForm();
    alert('Form submitted successfully!');
  }

  restoreForm() {
    this.user = {
      id: null,
      name: '',
      email: '',
    };
    this.submitted = false;
  }
  constructor(private userData: UserData) {}
}
