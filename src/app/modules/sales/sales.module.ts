import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {SalesRoutingModule} from './sales-routing.module';
import {ProductListComponent} from './pages/products/product-list/product-list.component';
import {SharedModule} from '../../shared/shared.module';
import {ProductSearchComponent} from './components/products/product-search.component';
import {
  MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule
} from '@angular/material';
import {ProductService} from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import {ProductCardComponent} from './components/products/product-card.component';
import {ProductDetailComponent} from './pages/products/product-detail/product-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    SalesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [
    ProductService,
    CartService
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductSearchComponent,
    ProductCardComponent
  ],
})
export class SalesModule { }
