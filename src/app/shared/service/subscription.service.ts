import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  serverUrl = environment.serverUrl;

  constructor( private http : HttpClient) { }

  getHeader(){
    const authToken = localStorage.getItem('authToken');
    console.log(authToken);
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      })
    };
    return httpOptions;
  }

  subscriptionList(){
    return this.http.get(`${this.serverUrl}/user/user[1]`, this.getHeader())
  }

  createSubscription(data: any) {
    // data.userId = '1642683431951ikR9wRpdazSJRlW';
    return this.http.post(`${this.serverUrl}/user/user[1]`, data, this.getHeader());
  }

  updateSubscription(id: any, data: any) {
    console.log(data);
    return this.http.put(`${this.serverUrl}//user/user[1]`, data, this.getHeader());
  }

  deleteSubscription(id: any) {
    return this.http.delete(`${this.serverUrl}/user/user[1]`, this.getHeader());
  }
}
