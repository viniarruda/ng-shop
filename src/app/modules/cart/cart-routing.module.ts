import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartCheckoutComponent} from './pages/cart-checkout/cart-checkout.component';

const routes: Routes = [
 {path: 'cart/checkout', component: CartCheckoutComponent},
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class CartRoutingModule { }
