import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvetmentService } from '../investment.service';
@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  constructor(private investmentService: InvetmentService){ }

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration()
    })

    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('5');
    this.duration.set('10');
  }
}
