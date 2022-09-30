import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  constructor(private productService: ProductsService, private router: Router) { }

  products: any;

  ngOnInit(): void {
  }
add(productName:string, productPrice:string, productDescription:string, productQuantity:string){
this.products ={
'name':productName,
'price':productPrice,
'description':productDescription,
'quantity':productQuantity
};

this.productService.addProduct(this.products as any).subscribe(product=>{
  this.products = product
});
console.log(this.products);
this.router.navigateByUrl('/')
} 
}
