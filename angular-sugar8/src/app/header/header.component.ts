import { Observable } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `.angular-logo {
        margin: 0 4px 3px 0;
        height: 35px;
        vertical-align: middle;
    }
    .fill-remaining-space {
      flex: 1 1 auto;
    }
    `
  ]
})
export class HeaderComponent implements OnInit {

  isLoggedIn$;

  constructor(private authService: AuthService, private router: Router) { 
    router.events.subscribe(() => {
      if(localStorage.access_token != undefined){
        this.isLoggedIn$ = true;
      } else{
        this.isLoggedIn$ = false;
      }
    });
  }

  ngOnInit() {
  // this.isLoggedIn$ = this.authService.isLoggedIn;
   console.log(this.isLoggedIn$);
  }

  onLogout() {
    this.authService.logout();
  }

}
