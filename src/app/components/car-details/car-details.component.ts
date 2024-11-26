// src/app/components/car-details/car-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
  standalone: true, // This is a standalone component
  imports: [FormsModule, RouterModule, CommonModule],
})
export class CarDetailsComponent implements OnInit {
  car: any;
  newService = { part: '', cost: 0 };

  constructor(private route: ActivatedRoute, private carService: CarService) {}

  ngOnInit(): void {
    const carId = Number(this.route.snapshot.paramMap.get('id'));
    this.car = this.carService.getCarById(carId);
  }

  addService(): void {
    if (this.newService.part && this.newService.cost) {
      this.carService.addServiceToCar(this.car.id, { ...this.newService });
      this.car = this.carService.getCarById(this.car.id); // Refresh the car details
      this.newService = { part: '', cost: 0 };
    }
  }
}
