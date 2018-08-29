import {Component, HostListener, Input, Output, OnInit, EventEmitter} from '@angular/core';
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
      ]),
      transition('* => void', [
        style({transform: 'translateX(0%)'}),
        animate(350)
      ]),
    ])
  ]
})
export class CartItemComponent implements OnInit {
  constructor() {}

  @Input() product: Product;
  @Output() clear = new EventEmitter<number>();

  ngOnInit() {}
}
