import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  api: string = 'http://localhost:8080/products'

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<IProduct[]>(this.api);
  }

  registerProduct(product: IProduct) {
    return this.http.post<IProduct>(this.api + '/register', product)
  }
}
