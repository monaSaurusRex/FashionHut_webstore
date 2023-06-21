import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "https://fakestoreapi.com/"

  constructor(private http: HttpClient) {}
  private url: string = "http://localhost:3000"

  login(username: string, password: string): Observable<any> {
    const body = {
      username: " mor_2314",
      password: password
    };
    return this.http.post<any>(`${this.url}auth/login`, body);
  }
  
}
