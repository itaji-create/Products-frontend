import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent {
  constructor(private productsService: ProductsService) {}

  @Input() data: IProduct[] = [];

  deleteProduct(id: number) {
    Swal.fire({
      title: 'Você tem certeza?',
      text: "Não será possível desfazer essa ação!",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Deletar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productsService.deleteProduct(id).subscribe(result => {      
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )})
      }
    })
  }
}
