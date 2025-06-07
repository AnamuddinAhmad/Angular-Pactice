import { Component } from '@angular/core';
import { UserData } from '../user-data.service';
import { OnInit } from '@angular/core';
@Component({
  standalone: true,
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
  providers: [],
})
export class UserList implements OnInit {
  users: any[] = [];
  numbers = Array(10)
    .fill(0)
    .map((x, i) => i + 1);

  ngOnInit(): void {
    this.users = this.userData.getAllData();
  }
  
  deleteUser(index:number){
    this.userData.deleteData(index);
  };

  constructor(private userData: UserData) {
    this.users = this.userData.getAllData();
    console.log(this.users);
  }
}
