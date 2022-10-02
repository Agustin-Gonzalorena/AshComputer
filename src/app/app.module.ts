import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';

import {MatNativeDateModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import{MatBadgeModule} from '@angular/material/badge'
import {MatSidenavModule} from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { MiniCartComponent } from './components/pages/mini-cart/mini-cart.component';
import { ProductDetailsPageComponent } from './components/pages/product-details-page/product-details-page.component';
import { PaymentCompletePageComponent } from './components/pages/payment-complete-page/payment-complete-page.component';






@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    FooterComponent,
    CartPageComponent,
    AboutPageComponent,
    NotFoundPageComponent,
    ProductsPageComponent,
    MiniCartComponent,
    ProductDetailsPageComponent,
    PaymentCompletePageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatMenuModule,
    MatBadgeModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
