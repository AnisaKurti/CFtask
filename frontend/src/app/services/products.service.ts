import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Product } from '../models/products'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  
  url: string = 'http://localhost:8000'

  constructor(private http: HttpClient) {}

  listProducts() {
    return this.http.get<Product[]>(this.url + '/api/products')
  }
  httpOptions = {
     headers : new HttpHeaders({
      'Content-Type': 'application/json'
     })
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url + '/api/products', product, this.httpOptions);
  }

  find(id:number): Observable<Product> {
return this.http.get<Product>(this.url+ '/api/products/'+id);
  }

  update(id:number, product:Product): Observable<Product>{
   return this.http.put<Product>(this.url+'/api/products/'+id, product,this.httpOptions )  
  }

  deleteProduct(id:number):Observable<Product>{
 return this.http.delete<Product>(this.url+ '/api/products/'+id,this.httpOptions)
  }

}
 