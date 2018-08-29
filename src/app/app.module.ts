import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {AuthenticationModule} from './modules/authentication/authentication.module';
import {AppRoutingModule} from './core/routing/app-routing.module';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import {MatSnackBarModule} from '@angular/material';
import {TabService} from './core/services/tab.service';
import {CartService} from './core/services/cart.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    HttpClientModule,
    AuthenticationModule,
    AppRoutingModule,
    MatSnackBarModule,
    IonicModule.forRoot()
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    TabService,
    CartService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
