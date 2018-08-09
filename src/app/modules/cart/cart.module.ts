import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartRoutingModule} from './cart-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {
  MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CartRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [
    
  ],
  declarations: [
    
  ]
})
export class CartModule { }
