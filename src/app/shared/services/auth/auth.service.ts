import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

export interface AuthenticateResponse {
  username: string;
  email: string;
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private readonly http: HttpClient) {}

  isAuthenticated() {
    return localStorage.getItem("jwtToken") ? true : false;
  }

  login(username: string, password: string): Observable<AuthenticateResponse> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post<AuthenticateResponse>(
      `${this.apiUrl}/auth/authenticate`,
      { "username": username, "password": password },
      { headers })
    ;
  }

  logout() {
    localStorage.removeItem("jwtToken");

  }

  saveToken(token: string) {
    localStorage.setItem("jwtToken", token)
  }

  getToken() {
    return localStorage.getItem("jwtToken");
  }
}
