import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: boolean = true;

  constructor() { }

  login() {
    this.isLogged = true;
  }

  logout() {
    this.isLogged = false;
  }
}
