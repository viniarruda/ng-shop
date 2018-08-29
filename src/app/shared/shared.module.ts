import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {ContainerComponent} from './components/container.component';
import {
  MatButtonModule, MatIconModule, MatListModule, MatProgressSpinnerModule, MatSidenavModule,
  MatToolbarModule, MatTabsModule
} from '@angular/material';
import {CartService} from '../core/services/cart.service';
import {TabService} from '../core/services/tab.service';
import {SpinnerComponent} from './components/spinner.component';
import {LayoutComponent} from './components/layout.component';
import {TabComponent} from './components/tabs.component';
import {CartPickupComponent} from '../modules/sales/pages/cart/cart-pickup.component';
import {CartItemComponent} from '../modules/sales/components/cart/cart-item.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatTabsModule,
    RouterModule
  ],
  providers: [],
  declarations: [
    ContainerComponent,
    SpinnerComponent,
    LayoutComponent,
    CartPickupComponent,
    CartItemComponent,
    TabComponent
  ],
  exports: [
    ContainerComponent,
    SpinnerComponent,
    LayoutComponent,
    CartPickupComponent,
    CartItemComponent,
    TabComponent
  ]
})
export class SharedModule { }
