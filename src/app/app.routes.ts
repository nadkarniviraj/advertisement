import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { CustomcarComponent } from './customcar/customcar.component';
import { OpticalplanetComponent } from './opticalplanet/opticalplanet.component';
import { TruechoiceautoComponent } from './truechoiceauto/truechoiceauto.component';
import { BajajComponent } from './bajaj/bajaj.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
   // { path: 'client', component: ClientComponent },
     { path: 'customcar', component: CustomcarComponent },
     { path: 'opticalplanet', component: OpticalplanetComponent },
     { path: 'truechoiceauto', component: TruechoiceautoComponent },
          { path: 'bajaj', component: BajajComponent },

    // Redirect unknown URLs to Home
    { path: '**', redirectTo: '' }
  ];