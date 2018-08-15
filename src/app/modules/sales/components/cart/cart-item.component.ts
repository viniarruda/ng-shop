import {Component, HostListener, Input} from '@angular/core';
import {
  trigger, transition, animate, style
} from '@angular/animations';
import {Product} from '../../../../core/models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: 'cart-item.component.html',
  styleUrls: ['cart-item.component.scss'],
  animations: [
    trigger('itemAnim', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate(350)
      ])
    ])
  ]
})
export class CartItemComponent {
  constructor() {}

  @Input() product: Product;
}
