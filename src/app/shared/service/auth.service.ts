import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serverUrl = environment.serverUrl;
  getUserName: any = [];
  usersList: any = [];
  getUserLocal:any;

  constructor(private http : HttpClient,
    private router: Router) { }

  signin(){
    return this.http.get(`${this.serverUrl}/users.json`)
    .pipe(map((responseData: any) =>{
      // const usersList = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          this.usersList.push({...responseData[key], id: key})
        }
      };
      return this.usersList;
    }))
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
