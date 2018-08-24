import { Component, OnInit } from '@angular/core';
import { TabService } from '../../core/services/tab.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.scss']
})
export class TabComponent implements OnInit {
  class: String;
  tabs;
  
  constructor(private tabService: TabService){}

  ngOnInit() {
    this.tabs = this.tabService.tabs;
  }

  switchTabs(event, item) {
    this.tabService.activeTabId = item.Id;
  }

  newTab() {
    this.tabService.createTab();
  }

  log(val){
    console.log(val);
  }
}