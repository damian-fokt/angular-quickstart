import { Injectable } from '@angular/core';

interface ServiceRecord {
  part: string;
  cost: number;
}

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  services: ServiceRecord[];
}

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private localStorageKey = 'cars';

  // No need to inject CarService into itself
  constructor() {}

  // Get all cars
  getCars(): Car[] {
    const cars = localStorage.getItem(this.localStorageKey);
    return cars ? JSON.parse(cars) : [];
  }

  // Get a car by ID
  getCarById(id: number): Car | undefined {
    const cars = this.getCars();
    return cars.find((car) => car.id === id);
  }

  // Add a new car
  addCar(car: Car): void {
    const cars = this.getCars();
    cars.push(car);
    localStorage.setItem(this.localStorageKey, JSON.stringify(cars));
  }

  // Add a service to a car
  addServiceToCar(carId: number, service: ServiceRecord): void {
    const cars = this.getCars();
    const car = cars.find((c) => c.id === carId);
    if (car) {
      car.services.push(service);
      localStorage.setItem(this.localStorageKey, JSON.stringify(cars));
    }
  }
}
