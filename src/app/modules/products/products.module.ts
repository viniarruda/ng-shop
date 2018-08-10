import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductListComponent} from './pages/product-list/product-list.component';
import {SharedModule} from '../../shared/shared.module';
import {ProductSearchComponent} from './components/product-search.component';
import {
  MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule
} from '@angular/material';
import {ProductService} from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import {ProductCardComponent} from './components/product-card.component';
import {ProductDetailComponent} from './pages/product-detail/product-detail.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
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
  ]
})
export class ProductsModule { }
