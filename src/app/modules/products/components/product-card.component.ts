import {Component, HostListener, Input} from '@angular/core';
import {Product} from '../../../core/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: 'product-card.component.html',
  styleUrls: ['product-card.component.scss']
})
export class ProductCardComponent {
  private hover = false;

  @Input() product: Product;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hover = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hover = false;
  }

  get class(): String {
    return this.hover ? 'mat-elevation-z5' : 'mat-elevation-z1';
  }

}
