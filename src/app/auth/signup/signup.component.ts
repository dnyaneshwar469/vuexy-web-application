import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';
declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm : any;
  submitted = false;
  err = false;
  userData: any;
  screenMode : any ='dark';
  
  constructor(private router : Router,
              private authService : AuthService) { }

  ngOnInit(): void {
    this.createForm();

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

  createForm(){
    this.signupForm = new UntypedFormGroup({
      userName: new UntypedFormControl(null, [Validators.required]),
      email: new UntypedFormControl(null, [Validators.required, Validators.email]),
      password: new UntypedFormControl(null, [Validators.required])
    })
  };

  get f(){ return this.signupForm.controls };

  submit(){
    this.submitted = true; 

    if(this.signupForm.invalid){
      return;
    }

    this.userData = {
      userName : this.signupForm.get('userName').value,
      email : this.signupForm.get('email').value,
      password : this.signupForm.get('password').value,
    }

    console.log(this.userData);
    
    // this.setUser()
    this.authService.signup(this.userData)
    .subscribe((data:any)=>{
      // localStorage.setItem('authToken',JSON.stringify(data));
      this.router.navigate(['/signin']);
    }, err => {
      this.err = true;
      console.log(err);
    })

    // this.setItem();
  }

  // setItem(){
  //   localStorage.setItem('authToken', JSON.stringify(this.userData));
  //   return;
  // }
}
