// src/app/components/add-car/add-car.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
  standalone: true, // This is a standalone component
  imports: [FormsModule], // Import FormsModule to enable ngModel
})
export class AddCarComponent {
  newCar = { id: 0, make: '', model: '', year: 0, services: [] };

  constructor(private carService: CarService, private router: Router) {}

  addCar(): void {
    const cars = this.carService.getCars();
    this.newCar.id = cars.length
      ? Math.max(...cars.map((car) => car.id)) + 1
      : 1;
    this.carService.addCar(this.newCar);
    this.router.navigate(['/']);
  }
}
