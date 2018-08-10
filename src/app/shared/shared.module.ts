import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContainerComponent} from './components/container.component';
import {
  MatButtonModule, MatIconModule, MatListModule, MatProgressSpinnerModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {CartService} from '../core/services/cart.service';
import {SpinnerComponent} from './components/spinner.component';
import {LayoutComponent} from './components/layout.component';
import {CartPickupComponent} from '../modules/cart/pages/cart-pickup/cart-pickup.component';

@NgModule({
  imports: [
    CommonModule,
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
    CartPickupComponent
  ],
  exports: [
    ContainerComponent,
    SpinnerComponent,
    LayoutComponent,
    CartPickupComponent
  ]
})
export class SharedModule { }
