import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = ''; 

  constructor(private http: HttpClient) {}

  forgotPassword(userName: string, newPassword: string): Observable<any> {
    const requestBody = {
        userName: userName,
        newPassword: newPassword

    };

    // Make an HTTP POST request to your API endpoint
    return this.http.post(`${this.apiUrl}/forgot-password`, requestBody);
  }
}
