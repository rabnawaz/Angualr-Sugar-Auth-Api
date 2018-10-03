import { Component } from '@angular/core';
import {TestService} from '../services/test.service'

@Component({
  selector: 'contacts-component',
  templateUrl: 'contacts.component.html'
,
  styles: []
})
export class ContactsComponent {
  items:any;
  constructor(private contacts: TestService){
    // this.contacts.getUserDetails();
    // this.contacts.$subscribeService.subscribe(items => {
    //   this.items = items;
    // });
  }
}
