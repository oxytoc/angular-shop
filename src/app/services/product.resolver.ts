import { ResolveFn, Router } from '@angular/router';
import { IProducts } from '../models/products';
import { ProductsService } from './products.service';
import { inject, Injectable } from '@angular/core';
import { EMPTY, catchError } from 'rxjs';

export const productResolver: ResolveFn<any> = (route, state) => {
  return inject(ProductsService).getProduct(route.params?.['id']).pipe(
    catchError(() => {
      inject(Router).navigate(['/products']);
      return EMPTY;
    })
  )
};
