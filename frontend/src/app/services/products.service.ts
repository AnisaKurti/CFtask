import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { TitleStrategy } from '@angular/router'
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url: string = 'http://localhost:8000'

  constructor(private http: HttpClient) {}

  listProducts() {
    return this.http.get<any>(this.url + '/api/products')
  }
  httpOptions = {
     headers : new HttpHeaders({
      'Content-Type': 'application/json'
     })
  }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.url + '/api/products', product, this.httpOptions);
  }

  find(id:number): Observable<any> {
return this.http.get(this.url+ '/api/products/'+id);
  }

  update(id:number, product:any): Observable<any>{
   return this.http.put(this.url+'api/products'+id, product,this.httpOptions )  
  }

  deleteProduct(id:any):Observable<any>{
 return this.http.delete<any>(this.url+ '/api/products'+id,this.httpOptions)
  }
}
