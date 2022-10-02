import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../services/products.service';
import { Product } from '../models/products';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.productsService.listProducts()
      .subscribe((product) => (this.products = product));
  }

  deleteProduct(id: number) {
    this.productsService
      .deleteProduct(id)
      .subscribe(() => (this.products = this.products.filter((x) => x.id !== id)));
  }

}