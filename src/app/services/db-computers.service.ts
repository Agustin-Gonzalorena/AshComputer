import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILaptops } from '../interfaces/laptos-interface';

const URL = 'https://632c9a265568d3cad8894230.mockapi.io/laptos/laptos';
@Injectable({
  providedIn: 'root'
})
export class DbComputersService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<ILaptops[]> {
    return this.http.get<ILaptops[]>(URL);
  }
}
