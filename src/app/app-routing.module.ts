import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { RegisterProductComponent } from './pages/register-product/register-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: '', component: ProductsComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'products/register', component: RegisterProductComponent,
  },
  {
    path: 'products/edit/:id', component: EditProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
