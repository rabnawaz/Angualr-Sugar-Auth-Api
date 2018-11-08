import { Component, OnInit } from '@angular/core';
import {
  Http, RequestOptions, Headers, Response}
   from '@angular/http';
import { Injectable } from '@angular/core';
import {TestService} from '../services/test.service';



@Injectable()
@Component({
  selector: 'contacts-component',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.scss']
})


export class ContactsComponent implements OnInit{
  items:any;
  data;
  ngOnInit(){

  }
  constructor(private testservice: TestService) {
    this.testservice.getSugarProduct();
    this.testservice.$productSubscriber.subscribe(data => {
      this.items = data;
    });
  }


}
