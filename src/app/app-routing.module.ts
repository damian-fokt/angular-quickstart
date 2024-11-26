// src/app/app-routing.module.ts
import { Routes } from '@angular/router';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { AddCarComponent } from './components/add-car/add-car.component';

export const routes: Routes = [
  { path: '', component: CarListComponent },
  { path: 'car-details/:id', component: CarDetailsComponent },
  { path: 'add-car', component: AddCarComponent },
];
