import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProducts } from '../models/products';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  url: string = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<IProducts[]>(this.url + "/products");
  }

  getProduct(id: number){
    return this.http.get<IProducts[]>(this.url + `/products/${id}`);
  }
}
