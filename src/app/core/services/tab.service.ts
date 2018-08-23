import {Injectable} from '@angular/core';
import {Tab} from '../models/tab';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  tabs: Tab[] = [];
  id: number = 1;

  constructor(public router: Router) {
    this.tabs.length === 0 && this.tabs.push({
      Id: (this.tabs.length - 1) + 1,
      Link: this.router.url
    })
  }

  createTab() {
    this.tabs.push({
      Id: (this.tabs.length - 1) + 1,
      Link: "/sales"
    });
    console.log(this.tabs)
  }

}
