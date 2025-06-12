import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  imports: [],
  templateUrl: './userprofile.html',
  styleUrl: './userprofile.css',
})
export class Userprofile implements OnDestroy{
  ngOnDestroy(): void {
      console.log("UserProfile distroy");
  }
}
