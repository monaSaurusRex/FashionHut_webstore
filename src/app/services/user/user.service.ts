import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  checkAccountExistence(email: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {}
  private url: string = "http://localhost:3000"

  login(body: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.url}/login`, body, { headers });
  }

  createUser(body: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.url}/register`, body, { headers });
  }

  getUserEmail(): string | null {
    // Retrieve the email of the logged-in user from the user session or storage
    const user = this.getUserFromSession(); // Example: Retrieve user from session storage
    return user ? user.email : null;
  }

  private getUserFromSession(): any {
    // Implement the logic to retrieve the user from the session storage or any other storage mechanism
    // and return the user object
    // Example:
    const userString = sessionStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  }
    
}