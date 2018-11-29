import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

import {TestService} from '../services/test.service'
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  
  constructor(private router: Router, private loginService: LoginService,) {
    
  }

  
  login(user: User) {
    if (user.userName === user.userName && user.password === user.password) {
      //debugger;
      this.loginService.getSugarApiAuth(user.userName, user.password);
      //debugger;
    if(localStorage.access_token){
      this.loggedIn.next(true);
      this.router.navigate(['/']);
     }
      else {
      console.log('auth token was not found');
      }
    }
  }
  

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
