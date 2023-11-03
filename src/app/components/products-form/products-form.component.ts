import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
    this.productForm = new FormGroup({});
    this.productFunc = () => {};
    this.btnName = '';
  }

}
