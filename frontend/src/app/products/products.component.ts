import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService:ProductsService,private router: Router ) { }

  products: any;

  ngOnInit(): void {
    this.showProducts();
  }
 
  showProducts(){
    this.products  = this.productService.listProducts().subscribe(product=>{
    this.products = product;
    console.log(this.products)
    }); 
  }

  deleteProduct(id:any){
     this.productService.deleteProduct(id).subscribe(
res => {

  this.products = this.products.filter((a:any )=> a.id == id);
});
   
    this.router.navigateByUrl('/')
    
  }

}
