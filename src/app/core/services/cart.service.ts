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

  quantityItemsCart(items) {
    return this.qtd = items;
  }

  totalCartPrice() {}

  removeCartItem() {

  }

}
