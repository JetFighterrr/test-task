import { Component, OnChanges } from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnChanges{
  isLogin = true;
  user = '';

  ngOnChanges(){
    this.user = AuthService.getUserInfo();
  }

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
