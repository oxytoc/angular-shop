import { CanActivateFn, Router } from '@angular/router';
import { ProductsService } from './products.service';
import { inject } from '@angular/core';
import { EMPTY, catchError } from 'rxjs';

export const productGuard: CanActivateFn = (route, state) => {
  let success = true;
  console.log(route.params['id']);
  inject(ProductsService).getProduct(route.params?.['id']).pipe(
    catchError(() => {
      inject(Router).navigate(['/products']);
      success = false;
      return EMPTY;
    })
  );
  return success;
};
