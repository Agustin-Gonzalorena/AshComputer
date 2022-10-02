import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { PaymentCompletePageComponent } from './components/pages/payment-complete-page/payment-complete-page.component';
import { ProductDetailsPageComponent } from './components/pages/product-details-page/product-details-page.component';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: HomePageComponent,
  },
  {
    path:'products',
    component:ProductsPageComponent,
  },
  {
    path:'product/:id',
    component:ProductDetailsPageComponent,
  },
  {
    path:'cart',
    component:CartPageComponent,
  },
  {
    path:'about',
    component:AboutPageComponent,
  },
  {
    path:'paymentComplete',
    component:PaymentCompletePageComponent,
  },
  {
    path:'**',
    component:NotFoundPageComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
