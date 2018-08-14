import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItem: Product[] = [];
  qtd: Number;

  constructor() {
  }

  addCartItem(product: Product) {
    return this.cartItem.push(product);
  }

  quantityItemsCart() {
    return this.cartItem.length;
  }

  clearCart() {
    return this.cartItem = [];
  }

  totalCartPrice() {}

  removeCartItem(product: Product, id) {
    this.cartItem.filter((product) => product.itemId === id)
  }

}
