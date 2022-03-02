import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { SingleProductComponent } from './components/single-product/single-product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'product',
    component: ProductListComponent
  },
  {
    path: 'product/create',
    component: ProductFormComponent 
  },
  {
    path: 'product/edit/:id',
    component: ProductFormComponent
  },
  {
    path: 'product/:id',
    component: SingleProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
