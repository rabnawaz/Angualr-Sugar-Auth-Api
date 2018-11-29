import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

import { PlatformLocation } from '@angular/common';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
,
  styles: []
})
export class HomeComponent {
  items:any;
  data;
  constructor(private router: Router,authService: AuthService, location: PlatformLocation) {
    location.onPopState(() => {
      this.router.navigate(['/contacts']);
    });
  }
 

  ngOnInit(){
}
}
