import { Component, OnInit } from '@angular/core';
import { TabService } from '../../core/services/tab.service';
import {Router} from '@angular/router';
import {Tab} from '../../core/models/tab';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.scss']
})
export class TabComponent implements OnInit {
  tabs;
  
  constructor(private tabService: TabService,
              private router: Router) { }

  ngOnInit() {
    this.tabs = this.tabService.tabs;
  }

  switchTabs(item: Tab) {
    this.tabService.activeTabId = item.Id;
    this.router.navigate([item.Link]);
  }

  newTab() {
    this.tabService.createTab();
  }

  log(val) {
    console.log(val);
  }
}
