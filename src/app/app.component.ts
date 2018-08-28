import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {TabService} from './core/services/tab.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    private tabsService: TabService,
    private router: Router) {

    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        tabsService.updateTabUrl(val.url);
      }
    });
  }
}
