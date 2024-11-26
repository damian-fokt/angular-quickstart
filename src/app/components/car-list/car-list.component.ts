import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  standalone: true, // This is a standalone component
  imports: [FormsModule, RouterModule, CommonModule],
})
export class CarListComponent implements OnInit {
  cars: any[] = []; // Initialize as an empty array

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    // Now, it's safe to use carService since it's initialized
    this.cars = this.carService.getCars();
  }
}
