import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';
const ACCESS_TOKEN = "ACCESS_TOKEN";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public saveItem(key: string, value: any): void {
    window.sessionStorage.removeItem(key);
    window.sessionStorage.setItem(key, value);
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if(user) {
      return JSON.parse(user);
    }
    return null;
  }

  public getItem(key: string): any {
    const item = window.sessionStorage.getItem(key);
    if(item) {
      return item;
    }
    return null;
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if(user) {
      return true;
    }
    return false;
  }

  public logout(): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.removeItem(ACCESS_TOKEN);
  }
}
