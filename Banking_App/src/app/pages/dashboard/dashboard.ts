import { Component, OnInit } from '@angular/core';
import { Nav } from '../../components/nav/nav';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [Nav, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  currentUser: string = '';
  allUser: any = [];
  items: { path: string; title: string }[] = [];
  ngOnInit(): void {
    this.acitveRouter.paramMap.subscribe((params) => {
      this.currentUser = params.get('user') || '';
    });

    this.items = [
      {
        path: `/dashboard/${this.currentUser}`,
        title: 'Home',
      },
      {
        path: `/profile/${this.currentUser}`,
        title: 'Profile',
      },
      {
        path: '',
        title: 'Logout',
      },
    ];
    this.allUser = this.userServices.getUserRegister();
    console.log('Its working', this.currentUser);
    console.log('Its working', this.allUser);
  }

  constructor(
    private router: Router,
    private acitveRouter: ActivatedRoute,
    private userServices: User
  ) {}
}
