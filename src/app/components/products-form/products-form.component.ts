import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent {
  @Input() productForm: FormGroup;
  @Input() productFunc: Function;
  @Input() btnName: string;

  constructor() {
    this.productForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      codigoBarras: new FormControl('', Validators.required),
      preco: new FormControl(0, Validators.required)
    });
    this.productFunc = () => {};
    this.btnName = '';
  }

}
