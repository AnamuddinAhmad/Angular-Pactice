import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { UserForm } from './user-form/user-form';
import { UserList } from './user-list/user-list';
import { Deafult } from './deafult/deafult';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'user-form', component: UserForm },
  { path: 'all-user', component: UserList },
  { path: '**', component: Deafult }, // Wildcard route for 404
];
