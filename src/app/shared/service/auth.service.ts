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

  signin(userData: any){
    return this.http.get(`${this.serverUrl}`, userData)
  }

  signup(userData: any) {
    return this.http.post(`${this.serverUrl}`, userData);
  }

  isSignin(){
    return localStorage.getItem('authToken')!=null;
  }

  signout(){
    localStorage.removeItem('authToken');
    this.router.navigate(['/signin']);
  }
}
