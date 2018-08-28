import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../../core/services/cart.service';

@Component({
  selector: 'app-cart-pickup',
  templateUrl: './cart-pickup.component.html',
  styleUrls: ['./cart-pickup.component.scss']
})
export class CartPickupComponent implements OnInit {
  recentItem;
  totalPrice: number = 0;

  constructor(public cartService: CartService) {}

  get isLoading(): Boolean {
    return this.recentItem == null;
  }

  ngOnInit() {
    this.cartService.activeCart.items; // Itens do Carrinho ativo
    console.log('INIT', this.cartService.activeCart.items);
  }

  quantityItemsCart() {
    return this.cartService.activeCart.items.length;
  }

  clearCart(id) {
    this.cartService.removeCartItem(id);
  }
  
  // clearCart(product: Product, id) {
  //   this.cartService.removeCartItem(product, id);
  // }

  clearAll() {
    this.cartService.clearCart();
  }

  // totalCartPrice() {
  //   this.totalPrice = this.recentItem.reduce((totalPrice, product) => totalPrice + product.salePrice, 0);
  //   return this.totalPrice;
  // }
  
  log(val) {
    console.log(val);
  }
}
