import { Component, OnDestroy, OnInit } from '@angular/core';
import { IDescriptions, ILaptops } from 'src/app/interfaces/laptos-interface';
import { DbComputersService } from 'src/app/services/db-computers.service';
import { Observable, retry, Subscription, tap } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit,OnDestroy {

  laptops: ILaptops[] = [];
  mockApi:boolean=true;

  constructor(
    private dataBase:DbComputersService,
    private cartService:CartService
    ) { }

  ngOnInit(): void {
    this.cartService.mockApiSubject.subscribe(d=>this.mockApi=d)

    if(this.mockApi==true){
    this.dataBase
      .getAll()
      .pipe(
        tap((laptops: ILaptops[]) => laptops.forEach((laptop) => (laptop.quantity = 0)))
      )
      .subscribe((datosQueMeTrae) => (this.laptops= datosQueMeTrae));
      }
    
    if(this.mockApi==false){
      this.cartService.backUpSubject.subscribe(d=>this.laptops=d)
    }
    /* console.log(this.laptops[1].stock)
      this.cartService.datoStock.subscribe(datos=>
        this.laptops.forEach((b) => {
          if(b.name===datos.name) b.stock = b.stock + datos.stock
        }))
        console.log(this.laptops[1].stock) */
  }
  ngOnDestroy(): void {
    this.cartService.mockApiSubject.next(false)
    this.cartService.backUpSubject.next(this.laptops);
  }
  addToCart(laptop: ILaptops): void {
    this.cartService.addToCart(laptop);
    laptop.quantity=laptop.quantity+1;
    laptop.stock=laptop.stock-1;
    /* laptop.quantity = 0; */
    
  }
  orderRelevant(){
    this.laptops=this.laptops.sort((a,b)=>a.id-b.id)
  }
  orderMin(){
    this.laptops=this.laptops.sort((a,b)=>a.price-b.price)
  }
  orderMax(){
    this.laptops=this.laptops.sort((a,b)=>b.price-a.price)
  }
  orderMaxStock(){
    this.laptops=this.laptops.sort((a,b)=>b.stock-a.stock)
  }
  orderOffer(){
    this.laptops=this.laptops.sort((a,b)=> {return a.offer===b.offer?0:a.offer?-1:1})
  }
}
