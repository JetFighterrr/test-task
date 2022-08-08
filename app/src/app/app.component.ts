import { Component } from '@angular/core';
import {AuthService} from "./auth.service";
// import {Route} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  isLogin = true;
  user = 'Default user';

  login():void {
    this.isLogin = false;
    this.user = AuthService.getUserInfo()  || 'Default user';
  }

  logout():void {
    this.isLogin = true;
    AuthService.logout();
    this.user = AuthService.getUserInfo() || 'Default user';
  }
}
