import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';
import { map } from 'rxjs/operators'
declare var $: any;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm: any;
  submitted = false;
  err = false;
  userData: any;
  responseData:any;
  screenMode : any ='dark';

  constructor(private authService : AuthService,
              private router : Router) { }

  ngOnInit(): void {
    this.createFrom();

    if(!localStorage.getItem('screenMode')){
      localStorage.setItem('screenMode', 'dark');
      this.screenMode = localStorage.getItem('screenMode');
      $('.auth-body').addClass('auth-dark-bg');
      $('.auth-body').removeClass('auth-light-bg')
    }else if (localStorage.getItem('screenMode') === 'dark') {
      localStorage.setItem('screenMode', 'dark');
      this.screenMode = localStorage.getItem('screenMode');
      $('.auth-body').addClass('auth-dark-bg');
      $('.auth-body').removeClass('auth-light-bg')
    } else if (localStorage.getItem('screenMode') === 'light') {
      localStorage.setItem('screenMode', 'light');
      this.screenMode = localStorage.getItem('screenMode');
      $('.auth-body').removeClass('auth-dark-bg');
      $('.auth-body').addClass('auth-light-bg')
    }
  }

  createFrom(){
    this.signinForm = new UntypedFormGroup({
      email: new UntypedFormControl(null, [Validators.required, Validators.email]),
      password: new UntypedFormControl(null, [Validators.required])
    })
  }

  get f(){ return this.signinForm.controls}

  submit(){
    this.submitted = true;

    if(this.signinForm.invalid){
      return;
    }

    this.userData = {
      email: this.signinForm.get('email').value,
      password: this.signinForm.get('password').value
    }
    console.log(this.userData);
    this.setItem();

    this.authService.signin()
    .subscribe( (data: any)=>{
      // localStorage.setItem('authToken',JSON.stringify(data));
      console.log(data)
      const user = data.find((a: any)=>{
        return a.email === this.signinForm.value.email && a.password === this.signinForm.value.password
      });
      if(user){
        this.signinForm.reset();
        this.router.navigate(['/']);
      }else{
        this.err = true;
      }
    });
  }
  setItem(){
    const stringData = JSON.stringify(this.userData);
    return localStorage.setItem('authToken', stringData);
  }
}
