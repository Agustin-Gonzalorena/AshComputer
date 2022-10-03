import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IFact, ILaptops } from '../interfaces/laptos-interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public mockApiSubject:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(true);
  
  public backUpSubject:BehaviorSubject<ILaptops[]>=new BehaviorSubject<ILaptops[]>([]);
  
  private _inCart:number=0;
  public _inCartSubject:BehaviorSubject<number>=new BehaviorSubject<number>(this._inCart)

  private sum:number=0;
  public sumSubject:BehaviorSubject<number>=new BehaviorSubject<number>(0)

  private _laptops:ILaptops[]=[];
  private _laptopsSubject:BehaviorSubject<ILaptops[]>=new BehaviorSubject<ILaptops[]>([]);
  public laptops:Observable<ILaptops[]>=this._laptopsSubject.asObservable();

  private _datoStock:IFact[]=[];
  private _datoStockSubject:BehaviorSubject<IFact>=new BehaviorSubject<IFact>({name:'d',stock:1})
  datoStock:Observable<IFact>=this._datoStockSubject.asObservable();

  constructor() { }

  addToCart(laptop: ILaptops) {
    laptop.quantity=1
    let item: ILaptops | undefined = this._laptops.find(
      (v1) => v1.name == laptop.name
    );
    if (!item && laptop.quantity > 0) {
      this._laptops.push({ ...laptop });
    } else if (item) {
      item.quantity += laptop.quantity;
    }
    this.sum=this.sum+laptop.price
    this._inCart=this._inCart+1
    
    this.sumSubject.next(this.sum)
    this._laptopsSubject.next(this._laptops);
    this._inCartSubject.next(this._inCart)
  }
  emptyCart(){
    this._inCart=0;
    this._laptops=[];
    this.sum=0;
    this._inCartSubject.next(0);
    this.backUpSubject.next([]);
    this._laptopsSubject.next([]);
    this.mockApiSubject.next(true);
  }
}
