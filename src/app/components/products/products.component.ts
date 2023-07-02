import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProducts } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy{
  products: IProducts[];
  productSubscription: Subscription;

  constructor(private ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.productSubscription = this.ProductsService.getProducts().subscribe( 
      data => this.products = data
    )
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }

}
