import {Component, Input, Output, OnInit, ViewChild, Directive} from '@angular/core';
import {Router} from '@angular/router';
import {CartService} from '../../core/services/cart.service';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.scss']
})
@Directive({ selector: '[cart]' })
export class LayoutComponent implements OnInit{
  @Input() containerClass = '';
  @Input() title = 'ANGULAR SHOP';
  @ViewChild('cart') sidenavCart;

  constructor(private router: Router,
              private cartService: CartService) {}
  
  ngOnInit() {
    this.itemsInCart();
    this.cartService.sidebarCart.subscribe(
      data => this.sidenavCart.open());
  }

  home() {
    this.router.navigateByUrl('/sales');
  }

  itemsInCart() {
    return this.cartService.quantityItemsCart();
  }

  log(val) {
    console.log(val)
  }
}
