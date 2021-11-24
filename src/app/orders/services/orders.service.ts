import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  public collection$!: Observable<Order[]>;
  private urlApi: string = environment.urlApi;

  constructor(private httpClient: HttpClient) {
    this.collection$ = this.httpClient.get<Order[]>(`${this.urlApi}/orders`);
    // console.log(this.collection$);
  }
}
