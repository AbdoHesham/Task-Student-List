import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  get isLoggedIn() {
    if (localStorage.getItem('userdata')) {
      return true;
    }
    return false
  }
}
