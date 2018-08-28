import {Component, OnInit, OnChanges} from '@angular/core';
import { ProductService } from '../../../../../core/services/product.service';
import { CartService } from '../../../../../core/services/cart.service';
import {Product} from '../../../../../core/models/product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private cartService: CartService) {
  }

  //Quando ocorre mudança na url
  ngOnInit() {
    this.route.url.subscribe((segment) => {
      const id = +this.route.snapshot.paramMap.get('id');
      this.getProduct(id);
    });
  }

  getCartItem(product: Product) {
    this.cartService.addCartItem(product);
    this.cartService.openSideNavCart();
  }

  getProduct(id: Number) {
    this.productService.get(id).subscribe(
      data => this.product = data);
  }

  log(val) {
    console.log(val);
  }
}
