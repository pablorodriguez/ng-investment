import { CurrencyPipe } from '@angular/common';
import { Component, inject} from '@angular/core';
import { InvetmentService } from '../investment.service';

@Component({
  selector: 'app-invesment-results',
  templateUrl: './invesment-results.component.html',
  styleUrl: './invesment-results.component.css'
})
export class InvesmentResultsComponent {

  private InvetmentService = inject(InvetmentService);

  results = this.InvetmentService.resultData.asReadonly();

}
