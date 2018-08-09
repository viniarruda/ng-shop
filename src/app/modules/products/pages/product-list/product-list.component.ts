import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../../core/services/product.service';
import {Product} from '../../../../core/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  searching: Boolean = false;

  get isLoading(): Boolean {
    return this.products == null;
  }

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.listProducts().subscribe(
      data => this.products = data.results);
  }

  toggleSearch() {
    this.searching = false;
    this.getProducts();
  }

  search(term: String): void {
    if (term.length > 3) {
      this.searching = true;
      this.products = null;
      this.productService.search(term).subscribe(
        data => this.products = data.results);
    }
  }

}