import { Component, OnInit } from '@angular/core';
import {
  Http, RequestOptions, Headers, Response}
   from '@angular/http';
import { Injectable } from '@angular/core';
import {TestService} from '../services/test.service';

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
  constructor(public testservice: TestService) {
    this.testservice.getSugarProduct();
    this.testservice.$productSubscriber.subscribe(data => {
      this.items = data;
    });

    // show more call
    
    this.testservice.$productSubscriberMore.subscribe(data => {
      this.itemsmore = data;
    });
    
  }

}
