import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showLogin:boolean;
  constructor() {
    this.showLogin = true;
   }
  toggleLogin(){
    this.showLogin = !this.showLogin
  }
  ngOnInit() {
  }

}
