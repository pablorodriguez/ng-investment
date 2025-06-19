import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() onCalculate = new EventEmitter<{
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number
  }>();

  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '5';
  duration = '10';

  onSubmit() {
    this.onCalculate.emit({
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration
    });
  }
}
