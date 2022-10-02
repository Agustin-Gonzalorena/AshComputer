import { Component, OnInit } from '@angular/core';
import { ILaptops } from 'src/app/interfaces/laptos-interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  laptops:ILaptops[]=[];
  total:number=0;
  class:string='empty';
  displayedColumns: string[] = ['image', 'name', 'quantity', 'price'];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.laptops.subscribe(d=>this.laptops=d)
    this.cartService.sumSubject.subscribe(d=>this.total=d)
    if(this.laptops.length!=0){
      this.class='full';
    }
  }
  emptyCart(){
    
    this.laptops=[];
    this.cartService.emptyCart();
    this.class='empty';
    console.log(this.class)
  }
}
