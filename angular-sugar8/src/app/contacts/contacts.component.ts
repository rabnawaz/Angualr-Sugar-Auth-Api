import { Component, OnInit } from '@angular/core';
import {
  Http, RequestOptions, Headers, Response}
   from '@angular/http';
import { Injectable } from '@angular/core';
import {TestService} from '../services/test.service';

import {ContactDetailService} from '../services/contact-detail.service';


import { FilterPipe} from './filter.pipe';



@Injectable()
@Component({
  selector: 'contacts-component',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.scss']
})


export class ContactsComponent implements OnInit{
  items:any;
  data;
  itemsmore;
  datamore;
  ngOnInit(){

  }
  constructor(public testservice: TestService, public contactDetailService:ContactDetailService) {
    this.testservice.getSugarProduct();
    this.testservice.$productSubscriber.subscribe(data => {
      this.items = data;
    });

    // show more call
    
    this.testservice.$productSubscriberMore.subscribe(data => {
      this.itemsmore = data;
    });

    
    
  }
  contactDetail(contactID){
    
    console.log('contact detail: ', contactID);
    //debugger;
    
    this.contactDetailService.getContactDetail(contactID);
  }


}
