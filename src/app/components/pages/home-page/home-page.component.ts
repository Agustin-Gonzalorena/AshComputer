import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ILaptops } from 'src/app/interfaces/laptos-interface';
import { DbComputersService } from 'src/app/services/db-computers.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  laptops:ILaptops[]=[];
  constructor(private dataBase:DbComputersService) { }

  ngOnInit(): void {
    this.dataBase
      .getAll()
      .pipe(
        tap((laptops: ILaptops[]) => laptops.forEach((laptop) => (laptop.quantity = 0)))
      )
      .subscribe((datosQueMeTrae) => (this.laptops= datosQueMeTrae.filter(d=>d.offer==true)));
      }
  }


