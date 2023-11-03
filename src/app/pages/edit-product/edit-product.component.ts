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
  constructor(private route: ActivatedRoute, private productsService: ProductsService) {}
  
  protected productForm: FormGroup = new FormGroup({
    nome: new FormControl(''),
    codigoBarras: new FormControl(''),
    preco: new FormControl(0)
  })
  protected id: number = 0
  
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.id = productId;
      this.productsService.getProductById(productId).subscribe((result) => {
        this.productForm =  new FormGroup({
          nome: new FormControl(result.nome),
          codigoBarras: new FormControl(result.codigoBarras),
          preco: new FormControl(result.preco)
        })
      })      
    });
  }

  updateProduct = () => {
    const product: IProduct = this.productForm.value as IProduct;
    const id: number = this.id;
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
