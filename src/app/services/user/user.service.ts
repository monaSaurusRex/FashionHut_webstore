import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  checkIfUserxists(email: any) {
    throw new Error('Method not implemented.');
  }
  checkAccountExistence(email: any) {
    throw new Error('Method not implemented.');
  }

  

  constructor(private http: HttpClient) {}
  private url: string = "http://localhost:3000"

  createUser(body: any){
    return this.http.post(`${this.url}/register`, body);
  }
    checkIfUserExists(email: string): Observable<any> {
      return this.http.get<any>(`/${email}`);
    }
    
  }
  


