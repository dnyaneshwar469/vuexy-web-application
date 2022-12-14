import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  serverUrl = environment.serverUrl;

  constructor(private http: HttpClient ) { }
  getHeader() {
    const authToken = localStorage.getItem('authToken');
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      })
    };
    return httpOptions;
  }

  getUser() {
    return this.http.get(`${this.serverUrl}/users.json`, this.getHeader())
      .pipe(map(response => response));
  }
  // signin(userData: any) {
  //   return this.http.post(`${this.serverUrl}/auth/signin`, userData);
  // }
  // signup(userData: any) {
  //   return this.http.post(`${this.serverUrl}/auth/signin`, userData);
  // }
  createUsers(data: any) {
    return this.http.post(`${this.serverUrl}`, data, this.getHeader());
  }
  getAllUsers() {
    return this.http.get(`${this.serverUrl}`, this.getHeader());
  }
  updateUser(id: any, data: any) {
    return this.http.put(`${this.serverUrl}/users/${id}`, data, this.getHeader());
  }
  deleteUser(id: any) {
    return this.http.delete(`${this.serverUrl}/users/${id}`, this.getHeader());
  }
}
