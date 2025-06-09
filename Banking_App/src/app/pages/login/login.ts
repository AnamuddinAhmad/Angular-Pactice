import { Component } from '@angular/core';
import { Nav } from '../../components/nav/nav';
import { LoginComp } from '../../components/login/login';

@Component({
  standalone:true,
  selector: 'app-login',
  imports: [Nav,LoginComp],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  
}
