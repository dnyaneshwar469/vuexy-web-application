import { Component, OnInit } from '@angular/core';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';
import { AuthService } from '../../service/auth.service';
import { UsersService } from '../../service/user.service';
import { map } from 'rxjs/operators'
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  screenMode : any ='dark';
  getUserName: any = [];
  usersList: any = [];
  getUserLocal:any;

  constructor( private authService: AuthService,
               private userService : UsersService) { }

  ngOnInit(): void {

    if(!localStorage.getItem('screenMode')){
      $('#screenMode')[0].checked = false;
      localStorage.setItem('screenMode', 'dark');
      this.screenMode = localStorage.getItem('screenMode');
      $('#mainContainer').removeClass('light-content');
      $('#mainContainer').addClass('dark-layout');
    }else if (localStorage.getItem('screenMode') === 'dark') {
      $('#screenMode')[0].checked = false;
      localStorage.setItem('screenMode', 'dark');
      this.screenMode = localStorage.getItem('screenMode');
      $('#mainContainer').removeClass('light-content');
      $('#mainContainer').addClass('dark-layout');
    } else if (localStorage.getItem('screenMode') === 'light') {
      $('#screenMode')[0].checked = true;
      localStorage.setItem('screenMode', 'light');
      this.screenMode = localStorage.getItem('screenMode');
      $('#mainContainer').addClass('light-content');
      $('#mainContainer').removeClass('dark-layout');
    }

    console.log(this.getUser())
  }

  public items: ItemModel[] = [
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    }];

    signout(){
      localStorage.removeItem('authToken');
      this.authService.signout();
    }

    changeScreenMode(){
      if($('#screenMode')[0].checked){
        localStorage.setItem('screenMode', 'light');
        this.screenMode = localStorage.getItem('screenMode');
        $('#mainContainer').addClass('light-content');
      $('#mainContainer').removeClass('dark-layout');
      }else {
        localStorage.setItem('screenMode', 'dark');
        this.screenMode = localStorage.getItem('screenMode');
        $('#mainContainer').removeClass('light-content');
        $('#mainContainer').addClass('dark-layout');
      }
    }

    getUser(){
      this.authService.signin()
      .subscribe((responseData:any) => {
        this.getUserName = responseData.find((a: any)=>{
          this.getUserLocal = JSON.parse(localStorage.getItem('authToken')!)
          console.log(this.getUserLocal.email)
          if( a.email === this.getUserLocal.email && a.password === this.getUserLocal.password){
            console.log(a.userName)
            return a.userName;
          }
        });
        console.log(this.getUserName.userName);
        return this.getUserName.userName;
      });
    }
}
