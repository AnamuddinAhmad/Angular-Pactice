import { Component, OnInit } from '@angular/core';
import { Nav } from '../nav/nav';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../services/user.service';

@Component({
  standalone: true,
  selector: 'app-comp-profile',
  imports: [Nav],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class ProfileComp implements OnInit {
  currentRoute = '';
  userData: any;
  items: { path: string; title: string }[] = [];
  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((params) => {
      this.currentRoute = params.get('user') || '';
    });
    this.items = [
      { path: `/dashboard/${this.currentRoute}`, title: 'Home' },
      { path: `/profile${this.currentRoute}`, title: 'Profile' },
      { path: '', title: 'Logout' },
    ];
    this.userData = this.userServices.findByEmail(this.currentRoute);
  }

  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    public userServices: User
  ) {}
}
