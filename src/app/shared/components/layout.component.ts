import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {CartService} from '../../core/services/cart.service';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.scss']
})

export class LayoutComponent implements OnInit{
  @Input() containerClass = '';
  @Input() title = 'ANGULAR SHOP';
  @ViewChild('cart') sidenavCart;

  constructor(private router: Router,
              private cartService: CartService,
              public toastController: ToastController) {}
  
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

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Test Toast',
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'Okay!'
    });
    toast.present();
  }

  log(val) {
    console.log(val)
  }
}
