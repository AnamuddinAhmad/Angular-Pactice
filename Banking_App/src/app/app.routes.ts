import { Routes } from '@angular/router';
import { PageNotFound } from './pages/page-not-found/page-not-found';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing-page/landing-page').then((m) => m.LandingPage),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('../app/pages/login/login').then((m) => m.Login),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('../app/pages/register/register').then((m) => m.Register),
  },
  {
    path: '**',
    component: PageNotFound,
  },
];
