import { Routes } from '@angular/router';
import { Javascript } from './components/javascript/javascript/javascript';
import { Typescript } from './components/typescript/typescript/typescript';
import { Home } from './components/home/home/home';
import { Angular } from './components/angular/angular/angular';
import { Rxjs } from './components/rxjs/rxjs/rxjs';
import { PageNotFound } from './components/page-not-found/page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'angular', component: Angular },
  { path: 'typescript', component: Typescript },
  { path: 'javascript', component: Javascript },
  { path: 'rxjs', component: Rxjs },
  { path: '**', component: PageNotFound },
];
