import {Injectable, Output, EventEmitter} from '@angular/core';
import {Product} from '../models/product';
import {Cart} from '../models/cart';
import {TabService} from './tab.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  @Output() sidebarCart = new EventEmitter();

  public carts: Cart[] = [];
  qtd: Number;
  
  get activeCart(): Cart {
     const index = this.carts.findIndex(i => i.tabId === this.tabService.activeTabId);
     if (index > -1) {
       return this.carts[index];
     }
    return null;
  }

  constructor(private tabService: TabService) {
    this.carts.push({
      tabId: 1,
      items: []
    });
    this.tabService.onNewTab.subscribe(
      data => this.carts.push({
        tabId: data,
        items: []
      })
    );
    console.log(this.carts);
  }


   addProduct(product: Product) {
     this.activeCart.items.push(product);
     console.log(this.activeCart);
     // const index = this.cartItems.findIndex(i => i.tabId === activeId);
     // console.log('index', index);
     // console.log('produto', product);
     // if (index > -1) {
     //   this.cartItems[index].items.push(product);
     // }
     // console.log(this.cartItems);
   }

  quantityItemsCart() {
    return this.activeCart.items.length;
  }

  clearCart() {
    return this.activeCart.items = [];
  }
  openSideNavCart() {
    this.sidebarCart.emit();
  }

  removeCartItem(id) {
    console.log('novo array', this.activeCart.items);
    this.activeCart.items = this.activeCart.items.filter((product) => product.itemId !== id);

  }

}
