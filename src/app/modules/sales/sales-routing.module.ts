import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './pages/products/product-list/product-list.component';
import {ProductDetailComponent} from './pages/products/product-detail/product-detail.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'product/:id', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
