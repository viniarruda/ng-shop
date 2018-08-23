import { Component, Input, OnInit } from '@angular/core';
import { TabService } from '../../core/services/tab.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.scss']
})
export class TabComponent implements OnInit {
  @Input() active: true;
  class: String;
  tabs;
  selectedItem;
  
  constructor(private tabService: TabService){}

  ngOnInit() {
    this.tabs = this.tabService.tabs;
    this.tabs.activeTabId;
  }

  switchTabs(event, item) {
    this.tabService.activeTabId = item.id;
  }

  createTab() {
    this.tabService.createTab();
  }

  log(val){
    console.log(val);
  }
}