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
  styles: []
})


export class ContactsComponent implements OnInit{
  items:any;
  data;
  
  constructor(private testservice: TestService) {}

  ngOnInit(){
    //self = this;
    this.testservice.getSugarProduct()
  }
  
    // this.testservice.getSugarProduct().subscribe(
    //   data =>{
    //     console.log(data)
    //   }
    // );
    
    //debugger;
    // this.testservice.getSugarProduct(items => {
    //   this.items = items;
      
    // });
  
}
