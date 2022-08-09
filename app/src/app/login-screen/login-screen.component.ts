import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.sass']
})
export class LoginScreenComponent implements OnInit {

  email = '';
  password = '';

  @Output() loginEvent = new EventEmitter<string>();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login() {
    if(!this.email) {
      return;
    }
    AuthService.login(this.email, this.password);
    this.loginEvent.emit(AuthService.getUserInfo());
    this.router.navigate(["books"],{queryParams: { redirectedFromClass: true} });
  }
}
