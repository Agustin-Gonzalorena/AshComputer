import { Component, OnDestroy, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment-complete-page',
  templateUrl: './payment-complete-page.component.html',
  styleUrls: ['./payment-complete-page.component.scss']
})
export class PaymentCompletePageComponent implements OnInit,OnDestroy {
  total:number=0;
  constructor(
    private cartService:CartService,
    private router:Router) {
   }

  ngOnInit(): void {
    this.cartService.sumSubject.subscribe(d=>this.total=d)
    if(this.total==0)
    this.router.navigate(['home']);
  }
  ngOnDestroy(): void {
    this.cartService.sumSubject.next(0);
  }
}
