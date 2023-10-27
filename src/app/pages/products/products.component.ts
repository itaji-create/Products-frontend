import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  protected products: IProduct[] = [];
  constructor(private productsService: ProductsService) {

  }

  ngOnInit() {
    this.productsService.getAll().subscribe(
      (data) => this.products = data)
  }
}
