import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContainerComponent} from './components/container.component';
import {
  MatButtonModule, MatIconModule, MatListModule, MatProgressSpinnerModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
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
