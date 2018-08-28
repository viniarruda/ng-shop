import {Injectable, Output, EventEmitter} from '@angular/core';
import {Product} from '../models/product';
import {Cart} from '../models/cart';
import {TabService} from './tab.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  @Output() sidebarCart = new EventEmitter();

  public cartItem: Product[] = [];
  public cartItems: Cart[] = [];
  
  qtd: Number;

  constructor(private tabService: TabService) {

  }

  addCartItem(product: Product) {
    const index = this.cartItems.findIndex(i => this.tabService.activeTabId === i.tabId);
    if (index > -1) {
      this.cartItems[index].items.push(product);
    }
  }

  quantityItemsCart() {
    return this.cartItem.length;
  }

  clearCart() {
    return this.cartItem = [];
  }
  
  openSideNavCart() {
    this.sidebarCart.emit();
  }

  removeCartItem(product: Product, id) {
    const index = this.cartItems.findIndex(i => this.tabService.activeTabId === i.tabId);
    if (index > -1) {
      this.cartItems[index].items = this.cartItems[index].items.filter((product) => product.itemId !== id)
    }
  }

}
