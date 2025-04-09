import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="form-container">
      <h2>Feedback Form</h2>
      <form [formGroup]="feedbackForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="name">Name</label>
          <input 
            id="name" 
            type="text" 
            formControlName="name"
            [class.invalid]="feedbackForm.get('name')?.invalid && feedbackForm.get('name')?.touched"
          >
          <div class="error" *ngIf="feedbackForm.get('name')?.invalid && feedbackForm.get('name')?.touched">
            Name is required
          </div>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input 
            id="email" 
            type="email" 
            formControlName="email"
            [class.invalid]="feedbackForm.get('email')?.invalid && feedbackForm.get('email')?.touched"
          >
          <div class="error" *ngIf="feedbackForm.get('email')?.invalid && feedbackForm.get('email')?.touched">
            Please enter a valid email
          </div>
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea 
            id="message" 
            formControlName="message"
            rows="4"
            [class.invalid]="feedbackForm.get('message')?.invalid && feedbackForm.get('message')?.touched"
          ></textarea>
          <div class="error" *ngIf="feedbackForm.get('message')?.invalid && feedbackForm.get('message')?.touched">
            Message is required
          </div>
        </div>

        <button type="submit" [disabled]="feedbackForm.invalid">Submit Feedback</button>
      </form>

      <div class="success-message" *ngIf="submitted">
        Thank you for your feedback!
      </div>
    </div>
  `,
  styles: [`
    .form-container {
      max-width: 600px;
      margin: 2rem auto;
      padding: 2rem;
      background: #f8f9fa;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    h2 {
      color: #2c3e50;
      margin-bottom: 2rem;
      text-align: center;
    }
    .form-group {
      margin-bottom: 1.5rem;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #34495e;
    }
    input, textarea {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ced4da;
      border-radius: 4px;
      font-size: 1rem;
    }
    input.invalid, textarea.invalid {
      border-color: #dc3545;
    }
    .error {
      color: #dc3545;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }
    button {
      width: 100%;
      padding: 0.75rem;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
    }
    button:disabled {
      background: #6c757d;
      cursor: not-allowed;
    }
    .success-message {
      text-align: center;
      color: #28a745;
      margin-top: 1rem;
      padding: 1rem;
      background: #d4edda;
      border-radius: 4px;
    }
  `]
})
export class FeedbackComponent {
  feedbackForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      console.log(this.feedbackForm.value);
      this.submitted = true;
      this.feedbackForm.reset();
    }
  }
}