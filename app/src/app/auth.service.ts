import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static store = window.localStorage;
  static isAuthenticated = false;
  static canEdit = false;
  static canDelete = false;

  constructor() { }

  static login(email: string, token: string): void {
    this.isAuthenticated = true;
    switch (email ){
      case 'editor': {
        this.canEdit = true;
        this.canDelete = false;
        break;
      }
      case 'owner': {
        this.canEdit = true;
        this.canDelete = true;
        break;
      }
      default: {
        this.canEdit = false;
        this.canDelete = false;
      }
    }
    this.store.setItem('login', email);
    this.store.setItem('token', token);
  }

  static logout():void {
    console.log('username:', this.getUserInfo());
    this.isAuthenticated = false;
    this.canEdit = false;
    this.canDelete = false;
    this.store.clear();
  }

  static getUserInfo():string {
    const user = this.store.getItem('login') || '';
    // console.log(user);

    return user;
  }
}
