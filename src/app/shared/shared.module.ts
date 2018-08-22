import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {ContainerComponent} from './components/container.component';
import {
  MatButtonModule, MatIconModule, MatListModule, MatProgressSpinnerModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {CartService} from '../core/services/cart.service';
import {SpinnerComponent} from './components/spinner.component';
import {LayoutComponent} from './components/layout.component';
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
    MatButtonModule
  ],
  providers: [
    CartService
  ],
  declarations: [
    ContainerComponent,
    SpinnerComponent,
    LayoutComponent,
    CartPickupComponent,
    CartItemComponent
  ],
  exports: [
    ContainerComponent,
    SpinnerComponent,
    LayoutComponent,
    CartPickupComponent,
    CartItemComponent
  ]
})
export class SharedModule { }
