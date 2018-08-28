import {Injectable} from '@angular/core';
import {Tab} from '../models/tab';
import {Router} from '@angular/router';
import {CartService} from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  tabs: Tab[] = [];
  activeTabId;

  constructor(public router: Router,
              public cartService: CartService) {
    this.tabs.length === 0 && this.tabs.push({
      Id: this.tabs.length + 1,
      Link: this.router.url
    });
    this.activeTabId = 1;
  }

  createTab(): void {
    this.tabs.push({
      Id: this.tabs.length + 1,
      Link: "/sales"
    });
    console.log(this.tabs);
    this.cartService.cartItems.push({
      tabId: this.tabs.length,
      items: []
    });
  }

  updateTabUrl(url: string): void {
    const index = this.tabs.findIndex(t => t.Id === this.activeTabId);
    if (index > -1) {
      this.tabs[index].Link = url;
    }
  }
}
