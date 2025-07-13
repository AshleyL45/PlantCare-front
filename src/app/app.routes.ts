import { Routes } from '@angular/router';
import {LandingPage} from './shared/components/landing-page/landing-page';
import {ProductDetails} from './shared/components/product-details/product-details';

export const routes: Routes = [
  {path: '', component: LandingPage},
  { path: 'product/:id', component: ProductDetails }
];
