import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';
import { IProduct } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{
  product: IProduct = {
    nome: "string",
    codigoBarras: "string",
    preco: 0,
    id: 0
  };
  productForm = new FormGroup({
    nome: new FormControl(''),
    codigoBarras: new FormControl(''),
    preco: new FormControl(0)
  })

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {}
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.productsService.getProductById(productId).subscribe((result) => {
        this.product = result;
      })      
    });
  }

  updateProduct() {
    const id = this.route.snapshot.paramMap.get('id');
    const product: IProduct = this.productForm.value as IProduct;
    this.productsService.updateProduct(id, product)
      .pipe(
        catchError(error => {
          Swal.fire(
            error.error.error,
            error.error.message,
            'error'
          );
          return throwError('Erro ao atualizar o produto.');
        })
      )
      .subscribe((result) => {
        Swal.fire(
          'Parabéns',
          'Produto atualizado!',
          'success'
        );
    });
  }
}
