// src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true, // Mark as standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'car-management-app';
}
