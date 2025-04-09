import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="home-container">
      <h1>Welcome to Weather App</h1>
      <p class="intro">
        This application provides real-time weather information and allows you to submit feedback.
        Explore our features through the navigation menu above.
      </p>
      <div class="features">
        <div class="feature-card">
          <h3>Weather Information</h3>
          <p>Get real-time weather updates for any city worldwide</p>
          <a routerLink="/weather" class="feature-link">Check Weather</a>
        </div>
        <div class="feature-card">
          <h3>Feedback</h3>
          <p>We value your input! Share your thoughts with us</p>
          <a routerLink="/feedback" class="feature-link">Submit Feedback</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
    h1 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }
    .intro {
      font-size: 1.2rem;
      color: #34495e;
      margin-bottom: 3rem;
      line-height: 1.6;
    }
    .features {
      display: flex;
      gap: 2rem;
      justify-content: center;
      margin-top: 2rem;
    }
    .feature-card {
      background: #f8f9fa;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      flex: 1;
      max-width: 300px;
    }
    .feature-card h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }
    .feature-link {
      display: inline-block;
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      background: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      transition: background-color 0.3s;
    }
    .feature-link:hover {
      background: #0056b3;
    }
  `]
})
export class HomeComponent {}