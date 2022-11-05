import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serverUrl = environment.serverUrl;

  constructor(private http : HttpClient,
    private router: Router) { }

  signin(){
    return this.http.get(`${this.serverUrl}/users.json`)
  }

  signup(userData: any) {
    return this.http.post(`${this.serverUrl}/users.json`, userData);
  }

  isSignin(){
    return localStorage.getItem('authToken')!=null;
  }

  signout(){
    localStorage.removeItem('authToken');
    this.router.navigate(['/signin']);
  }
}
