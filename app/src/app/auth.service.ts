import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static store = window.localStorage;
  static isAuthenticated = false;

  constructor() { }

  static login(email: string, token: string): void {
    this.isAuthenticated = true;
    this.store.setItem('login', email);
    this.store.setItem('token', token);
  }

  static logout():void {
    console.log('username:', this.getUserInfo());
    this.isAuthenticated = false;
    this.store.clear();
  }

  static getUserInfo():string {
    const user = this.store.getItem('login') || '';
    console.log(user);

    return user;
  }
}
