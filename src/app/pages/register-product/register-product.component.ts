import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
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

  protected productForm: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.pattern(/^[A-Za-z ]*$/)),
    codigoBarras: new FormControl('', Validators.maxLength(50)),
    preco: new FormControl(0)
  })

  registerProduct = () => {
    const product: IProduct = this.productForm.value as IProduct;
    this.productsService.registerProduct(product)
      .pipe(
        catchError(error => {
          Swal.fire(
            error.error.error,
            error.error.message,
            'error'
          );
          return throwError('Erro ao cadastrar o produto.');
        })
      )
      .subscribe((result) => {
        Swal.fire(
          'Parabéns',
          'Produto cadastrado!',
          'success'
        );
    });
  }
}
