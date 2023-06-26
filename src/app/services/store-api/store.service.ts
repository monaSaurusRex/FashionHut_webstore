import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) {}

  private url: string = "https://fakestoreapi.com"

  getAll() {
    return this.http.get(`${this.url}/products`);
  }

  getOneProduct(id: number) {
    return this.http.get(`${this.url}/products/${id}`);
  }

  createProduct(body: any) {
    //body means object -> any will eventually be replaced by an Object
    return this.http.post('', body);
  }

  updateProduct(id: number, body: any) {
    //combination of getOne and create
    return this.http.put('' + id, body);
  }

  deleteProduct(id: number) {
    //combination of getOne and create
    return this.http.delete('' + id);
  }

  getProductByCategory(category: any){
    return this.http.get('/category' + category )
  }

  getAllCategories(){
    return this.http.get<any[]>('https://fakestoreapi.com/products/categories');
  }

}
