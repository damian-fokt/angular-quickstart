import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';
import { CarListComponent } from './app/components/car-list/car-list.component'; // Path to your standalone component
bootstrapApplication(CarListComponent);
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Provide routes here
  ],
}).catch((err) => console.error(err));
