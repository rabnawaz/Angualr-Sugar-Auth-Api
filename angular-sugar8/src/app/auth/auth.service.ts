import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

import {TestService} from '../services/test.service'
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthService {
  //private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private loggedIn = new BehaviorSubject<boolean>(this.tokenAvailable());

  private tokenAvailable(): boolean {
    this.router.navigate(['/']);
    return !!localStorage.getItem('access_token');
  }


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
      if(typeof localStorage.getItem('access_token') != 'undefined'){
        this.loggedIn.next(true);
        this.router.navigate(['/home']);
      }
     
      
    }
  }
  

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
    localStorage.removeItem('access_token');
  }
}
