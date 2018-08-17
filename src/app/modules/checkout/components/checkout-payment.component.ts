import {Component} from '@angular/core';

export interface Employee {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-checkout-payment',
  templateUrl: 'checkout-payment.component.html',
  styleUrls: ['checkout-payment.component.scss']
})
export class CheckoutPaymentComponent {
  panelOpenState = false;
  selected: string;

  employees: Employee[] = [
    {value: 'joao-0', viewValue: 'João'},
    {value: 'jose-1', viewValue: 'José'},
  ];
}