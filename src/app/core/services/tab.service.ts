import {Injectable, Output, EventEmitter} from '@angular/core';

import {Tab} from '../models/tab';

import {Router} from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class TabService {
  @Output() onNewTab = new EventEmitter();
  tabs: Tab[] = [];
  activeTabId: number;

  constructor(public router: Router) {
    this.tabs.length === 0 && this.tabs.push({
      Id: this.tabs.length + 1,
      Link: this.router.url
    });
    this.activeTabId = 1;
  }

  createTab(): void {
    this.tabs.push({
      Id: this.tabs.length + 1,
      Link: '/sales'
    });
    console.log(this.tabs);
    this.onNewTab.emit(this.tabs.length);
    // this.cartService.cartItems.push({
    //   tabId: this.tabs.length,
    //   items: []
    // });
  }

  updateTabUrl(url: string): void {
    const index = this.tabs.findIndex(t => t.Id === this.activeTabId);
    if (index > -1) {
      this.tabs[index].Link = url;
    }
  }

  // addCartItem(product: Product) {
  //   this.cartService.addCartItem(product, this.activeTabId);
  //   console.log('id', this.activeTabId);
  // }
}
