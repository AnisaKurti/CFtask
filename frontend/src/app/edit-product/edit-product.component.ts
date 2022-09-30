import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  productId: any;
  product: any;
  constructor(private route: ActivatedRoute,  private router: Router, private productService: ProductsService) { }

  ngOnInit(): void { 
    const routeParams = this.route.snapshot.paramMap;
    this.productId = Number(routeParams.get('productId'));
    console.log(this.productId);
    this.productService.find(this.productId).subscribe((data:any)=>{
    this.product = data;
    console.log(this.product);

    })
  }
  update(productName:string, productPrice:string, productDescription:string, productQuantity:string){
      this.productService.update(this.productId, this.product).subscribe((res)=>{
        this.router.navigateByUrl('/');
      });
  }

}
  