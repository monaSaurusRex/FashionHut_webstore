import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = "http://localhost:3000"; // Update with your API URL
  private currentUser: User | null = null;

  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<User> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<User>(`${this.url}/posts`, user, { headers }); // Update with your registration endpoint
  }

  verifyUser(email: string, password: string): Observable<User | null> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<any>(`${this.url}/posts?email=${email}&password=${password}`, { headers }).pipe(
      map(response => {
        const users = response.posts;
        if (users.length > 0) {
          return users[0];
        } else {
          return null;
        }
      }),
      catchError(() => {
        return of(null);
      })
    );
  }
  
  
  

  setCurrentUser(user: User) {
    this.currentUser = user;
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  getCurrentUser(): User | null {
    if (!this.currentUser) {
      const userString = sessionStorage.getItem('user');
      this.currentUser = userString ? JSON.parse(userString) : null;
    }
    return this.currentUser;
  }

  logout() {
    this.currentUser = null;
    sessionStorage.removeItem('user');
  }
}
