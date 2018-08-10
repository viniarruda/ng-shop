import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import { CartItemComponent } from './components/cart-item.component';
import {CartService} from '../../core/services/cart.service';
import {
  MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [
    CartService
  ],
  declarations: [
    CartItemComponent
  ]
})
export class CartModule { }
