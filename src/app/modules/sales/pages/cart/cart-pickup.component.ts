import {Component, OnInit} from '@angular/core';
import {Product} from '../../../../core/models/product';
import {CartService} from '../../../../core/services/cart.service';

@Component({
  selector: 'app-cart-pickup',
  templateUrl: './cart-pickup.component.html',
  styleUrls: ['./cart-pickup.component.scss']
})
export class CartPickupComponent implements OnInit {
  recentItem: Product[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  get isLoading(): Boolean {
    return this.recentItem == null;
  }

  ngOnInit() {
    this.recentItem = this.cartService.cartItem;
  }

  editCartItem(id) {

  }

  quantityItemsCart() {
    return this.recentItem.length
  }

  clearCart(id) {
    let indexCart = this.cartService.cartItem.findIndex(i => i.itemId === id);
    return this.cartService.cartItem.splice(indexCart);
  }

  clear() {
    this.cartService.cartItem = [];
    this.recentItem = this.cartService.cartItem;
  }

  totalCartPrice() {
    this.totalPrice = this.recentItem.reduce((totalPrice, product) => totalPrice + product.salePrice, 0);
    return this.totalPrice;
  }

  log(val) {
    console.log(val);
  }
}