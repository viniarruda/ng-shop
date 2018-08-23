import { Component, Input, OnInit } from '@angular/core';
import { TabService } from '../../core/services/tab.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.scss']
})
export class TabComponent implements OnInit {
  @Input() active: true;
  tabs;
  selectedItem;
  
  constructor(private tabService: TabService){}

  ngOnInit() {
    this.tabs = this.tabService.tabs;
  }

  listClick(event, newValue) {
    this.selectedItem = newValue;
  }

  createTab() {
    this.tabService.createTab();
  }
}