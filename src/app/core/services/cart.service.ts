import {Injectable, Output, EventEmitter} from '@angular/core';
import {Product} from '../models/product';
import {Cart} from '../models/cart';
import {TabService} from './tab.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  @Output() sidebarCart = new EventEmitter();

  public cartItem: Product[] = [];
  public cartItems: Cart[] = [];
  qtd: Number;

  constructor(private tabService: TabService) {
    this.cartItems.push({
      tabId: 1,
      items: []
    });
    this.tabService.onNewTab.subscribe(
      data => this.cartItems.push({
        tabId: data,
        items: []
      })
    );
    console.log(this.cartItems);
  }


  // addCartItem(product: Product) {
  //   this.tabService.onNewTab.subscribe(
  //     data => {
  //       console.log('data', data);
  //       const index = this.cartItems.findIndex(i => i.tabId === data);
  //       if (index > -1) {
  //         this.cartItems[index].items.push(product);
  //       }
  //     });
  //   console.log(this.cartItems);
  //   // const index = this.cartItems.findIndex(i => i.tabId === activeId);
  //   // console.log('index', index);
  //   // console.log('produto', product);
  //   // if (index > -1) {
  //   //   this.cartItems[index].items.push(product);
  //   // }
  //   // console.log(this.cartItems);
  // }

  quantityItemsCart() {
    return this.cartItem.length;
  }

  clearCart() {
    return this.cartItem = [];
  }
  openSideNavCart() {
    this.sidebarCart.emit();
  }

  // removeCartItem(product: Product, id) {
  //   const index = this.cartItems.findIndex(i => this.tabService.activeTabId === i.tabId);
  //   if (index > -1) {
  //     this.cartItems[index].items = this.cartItems[index].items.filter((product) => product.itemId !== id)
  //   }
  // }

}
