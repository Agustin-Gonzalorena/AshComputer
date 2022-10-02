import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILaptops } from 'src/app/interfaces/laptos-interface';
import { CartService } from 'src/app/services/cart.service';
import { DbComputersService } from 'src/app/services/db-computers.service';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {
  laptops:ILaptops[]=[];
  laptop:any={};
  mockApi:boolean=true;
  id:string|null='';
  constructor(private _route:ActivatedRoute,
    private dataBase:DbComputersService,
    private cartService:CartService) { 
    this.id=this._route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.cartService.mockApiSubject.subscribe(d=>this.mockApi=d)
    if(this.mockApi==false){
    this.cartService.backUpSubject
    .subscribe((datosQueMeTrae) => (this.laptop= datosQueMeTrae.find(e=>e.id.toString()==this.id)));
    }

    if(this.mockApi==true){
      this.dataBase
      .getAll()
      .subscribe((datosQueMeTrae) => {
        (this.laptop= datosQueMeTrae.find(e=>e.id.toString()==this.id));
        (this.laptops=datosQueMeTrae);
        
      })

    }
  
  }
  addToCart(laptop: ILaptops): void {
    this.cartService.addToCart(laptop);
    laptop.quantity=laptop.quantity+1;
    laptop.stock=laptop.stock-1;
    
    this.laptops.forEach((b) => {
      if(b.id===this.laptop.id)
       b.stock = this.laptop.stock;
         this.cartService.backUpSubject.next(this.laptops);
    })
    this.cartService.mockApiSubject.next(false)
   
  
  }
}
