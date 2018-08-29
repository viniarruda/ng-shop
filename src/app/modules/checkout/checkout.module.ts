import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CheckoutRoutingModule} from './checkout-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {
  MatButtonModule, MatCardModule, MatExpansionModule, MatSelectModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule
} from '@angular/material';
import {ProductService} from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import {CheckoutComponent} from './pages/checkout.component';
import {CheckoutCartComponent} from './components/checkout-cart.component';
import {CheckoutPaymentComponent} from './components/checkout-payment.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CheckoutRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [
    ProductService
  ],
  declarations: [
    CheckoutComponent,
    CheckoutCartComponent,
    CheckoutPaymentComponent
  ]
})
export class CheckoutModule { }
