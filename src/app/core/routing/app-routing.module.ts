import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'sales', loadChildren: '../../modules/sales/sales.module#SalesModule'},
  { path: 'checkout', loadChildren: '../../modules/checkout/checkout.module#CheckoutModule'},
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
