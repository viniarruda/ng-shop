import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CartService} from '../../core/services/cart.service';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.scss']
})
export class LayoutComponent implements OnInit{
  @Input() containerClass = '';
  @Input() title = 'ANGULAR SHOP';

  constructor(private router: Router,
              private cartService: CartService) {}
  
  ngOnInit() {
    this.itemsInCart();
  }

  home() {
    this.router.navigateByUrl('/sales');
  }

  itemsInCart() {
    return this.cartService.quantityItemsCart();
  }

}
