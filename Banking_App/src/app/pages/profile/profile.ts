import { Component } from '@angular/core';
import { ProfileComp } from '../../components/profile/profile';

@Component({
  standalone: true,
  selector: 'app-profile',
  imports: [ProfileComp],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  
}
