import { Injectable, NgModule, inject } from '@angular/core';
import { ResolveFn, Router, RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BaskerComponent } from './components/basker/basker.component';
import { catchError, EMPTY } from 'rxjs';
import { ProductsService } from './services/products.service';
import { productGuard } from './services/product.guard';

const routes: Routes = [
  {path: '', component: BaseComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductDetailsComponent, canActivate: [productGuard]},
  {path: 'basket', component: BaskerComponent},
  {path: "**", redirectTo: "", component: BaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  
@Injectable()
export class AppRoutingModule { }
