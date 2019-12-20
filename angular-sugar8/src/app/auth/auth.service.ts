import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

import {TestService} from '../services/test.service'

@Injectable()
export class AuthService implements OnInit{
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  ngOnInit(){
    //console.log("loggedIn: " , this.loggedIn);
  }

  get isLoggedIn() {
    //console.log(this.loggedIn.asObservable());
    return this.loggedIn.asObservable();
  }

  
  constructor(private router: Router, private testService: TestService) {
    
  }

  
  login(user: User) {
    if (user.userName !=='' && user.password !== '') {
      
      this.testService.getSugarApiAuth(user.userName, user.password);
      if(localStorage.access_token !=undefined){
        this.loggedIn.next(true);
        this.router.navigate(['/']);
     }
    }
  }
  

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
    localStorage.removeItem('access_token');

  }
}
