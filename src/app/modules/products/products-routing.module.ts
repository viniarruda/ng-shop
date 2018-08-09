import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './pages/product-list/product-list.component';
import {ProductDetailComponent} from './pages/product-detail/product-detail.component';

const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'product/:id', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
