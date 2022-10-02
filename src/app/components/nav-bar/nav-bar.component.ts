import { Component, OnInit } from '@angular/core';
import { ILaptops } from 'src/app/interfaces/laptos-interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  
  inCart:number=0;
  
  constructor(private cartService: CartService) {
   }

  ngOnInit(): void {
    this.cartService._inCartSubject.subscribe(d=>this.inCart=d)
  }
}
