import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "http://localhost:8080"

  constructor() {}

  // login(username: string, password: string): Observable<any> {
  //   const headers = new HttpHeaders({ "Content-Type": "application/json" });
  //   return this.http.post(`${this.apiUrl}/auth`, { username, password }, { headers });
  // }

  logout() {

  }

  isAuthenticated() {
    return false;
  }
}
