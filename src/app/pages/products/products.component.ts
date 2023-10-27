import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [];
  constructor(private productsService: ProductsService) {

  }

  ngOnInit() {
    this.productsService.getAll().subscribe(
      (data) => this.products = data)
  }
}
