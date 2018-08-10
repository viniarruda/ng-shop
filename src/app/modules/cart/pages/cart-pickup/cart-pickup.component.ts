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
  totalPrice: any;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.recentItem = this.cartService.cartItem;
  }

  editCartItem() {
    alert('edit');
  }

  clearCart() {
    
  }

  quantityItemsCart() {
    this.cartService.quantityItemsCart(this.cartService.cartItem.length);
    return this.cartService.cartItem.length;
  }

  totalCartPrice() {
    this.cartService.cartItem.map((item) => { 
      this.totalPrice = item.salePrice++ })
    return this.totalPrice;
  }

  log(val) {
    console.log(val);
  }
}