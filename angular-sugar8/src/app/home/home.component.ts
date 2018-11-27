import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
,
  styles: []
})
export class HomeComponent {
  items:any;
  data;
  constructor(private testservice: TestService) {
    //this.testservice.getUserDetails('', '');
    this.testservice.$subscribeService.subscribe(items => {
      this.items = items;
      
    });
  }
 

  ngOnInit(){
}
}
