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
    path: 'dashboard/:user',
    loadComponent: () =>
      import('../app/pages/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'profile/:user',
    loadComponent: () =>
      import('../app/pages/profile/profile').then((m) => m.Profile),
  },
  {
    path: '**',
    component: PageNotFound,
  },
];
