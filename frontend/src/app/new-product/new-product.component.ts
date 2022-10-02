import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductsService} from '../services/products.service';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  form:FormGroup;

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name:  new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
      quantity: new FormControl('')
    });
  }

  submit(){
    console.log(this.form.value);
    this.productService.addProduct(this.form.value).subscribe(res => {
      console.log('Product created successfully!');
    })
  }
}