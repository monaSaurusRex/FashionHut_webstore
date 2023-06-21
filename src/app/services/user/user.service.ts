import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  private url: string = "http://localhost:3000"

  login(body: any){
    return this.http.post(`${this.url}/login`, body);
  }
  
}
