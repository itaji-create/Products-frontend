import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent {
  constructor(private productsService: ProductsService) {}

  productForm = new FormGroup({
    nome: new FormControl(''),
    codigoBarras: new FormControl(''),
    preco: new FormControl(0)
  })

  registerProduct() {
    const product: IProduct = this.productForm.value as IProduct;
    console.log(product);
    this.productsService.registerProduct(product).subscribe((result) => {
      Swal.fire(
        'Parabens',
        'usuatio cadastrado',
        'success'
      )
    })
  }
}
