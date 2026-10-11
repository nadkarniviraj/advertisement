import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'client', component: ClientComponent },

    // Redirect unknown URLs to Home
    { path: '**', redirectTo: '' }
  ];