import { Component } from '@angular/core';
import { About } from '../about/about';

@Component({
  selector: 'app-contact',
  imports: [About],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  email = 'contact@yourcompany.com';
  Ahmad: string =
    'Hii this is Ahmad who sending hte data one components to another component I Mean parent to Child';
}
