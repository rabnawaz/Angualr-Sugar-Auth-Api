import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

import {TestService} from '../services/test.service'

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  
  constructor(private router: Router, private testService: TestService) {
    
  }

  
  login(user: User) {
    if (user.userName == 'admin2' && user.password == '@dmin111') {
      
      this.testService.getSugarApiAuth(user.userName, user.password);
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
