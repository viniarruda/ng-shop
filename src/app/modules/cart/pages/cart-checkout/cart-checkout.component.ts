import {Component, OnInit} from '@angular/core';
import {Product} from '../../../../core/models/product';
import {CartService} from '../../../../core/services/cart.service';
import { ShowOnDirtyErrorStateMatcher } from '../../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.scss']
})
export class CartCheckoutComponent implements OnInit {
  recentItem: Product[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.recentItem = this.cartService.cartItem;
  }

  log(val) {
    console.log(val);
  }
}