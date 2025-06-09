import { Component } from '@angular/core';
import { RegisterComp } from '../../components/register/register';
import { Nav } from '../../components/nav/nav';
@Component({
  standalone: true,
  selector: 'app-register',
  imports: [RegisterComp,Nav],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {}
