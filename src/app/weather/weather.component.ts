import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  template: `
    <div class="weather-container">
      <h2>Weather Information</h2>
      <div class="search-box">
        <input 
          [(ngModel)]="city" 
          placeholder="Enter city name"
          (keyup.enter)="getWeather()"
        >
        <button (click)="getWeather()">Search</button>
      </div>

      <div class="weather-info" *ngIf="weatherData">
        <h3>{{ weatherData.name }}, {{ weatherData.sys?.country }}</h3>
        <div class="temperature">
          {{ weatherData.main?.temp }}°C
        </div>
        <div class="description">
          {{ weatherData.weather[0]?.description }}
        </div>
        <div class="details">
          <p>Humidity: {{ weatherData.main?.humidity }}%</p>
          <p>Wind Speed: {{ weatherData.wind?.speed }} m/s</p>
        </div>
      </div>

      <div class="error" *ngIf="error">
        {{ error }}
      </div>
    </div>
  `,
  styles: [`
    .weather-container {
      max-width: 600px;
      margin: 2rem auto;
      padding: 1rem;
    }
    .search-box {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
    }
    input {
      padding: 0.5rem;
      flex: 1;
    }
    button {
      padding: 0.5rem 1rem;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .weather-info {
      text-align: center;
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 8px;
    }
    .temperature {
      font-size: 3rem;
      margin: 1rem 0;
    }
    .description {
      text-transform: capitalize;
      margin-bottom: 1rem;
    }
    .error {
      color: red;
      margin-top: 1rem;
    }
  `]
})
export class WeatherComponent {
  city: string = '';
  weatherData: any;
  error: string = '';

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    if (!this.city) {
      this.error = 'Please enter a city name';
      return;
    }

    this.error = '';
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
      },
      error: (err) => {
        this.error = 'Failed to fetch weather data. Please try again.';
        console.error(err);
      }
    });
  }
}