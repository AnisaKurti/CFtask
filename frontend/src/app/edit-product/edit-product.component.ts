import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ProductsService } from '../services/products.service'
import { Product } from '../models/products'
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  productId: number
  product: Product
  form: FormGroup

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService,
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap
    this.productId = Number(routeParams.get('productId'))
    this.productService.find(this.productId).subscribe((data: Product) => {
      this.form.patchValue(data)
    })

    this.form = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
      quantity: new FormControl(''),
    })
  }

  submit() {
    console.log(this.form.value)
    this.productService
      .update(this.productId, this.form.value)
      .subscribe((res) => {
        console.log('Product updated successfully!')
        this.router.navigateByUrl('/')
      })
  }
}
