import { Component, OnInit } from '@angular/core';

import { ContactDetailService } from '../services/contact-detail.service';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  ngOnInit() {

  }
  items:any;
  constructor(private contactDetailService: ContactDetailService) {
      //debugger;
      //this.contactDetailService.getContactDetail();
      this.contactDetailService.$contactDetailSubscriber.subscribe(data => {
        this.items = data;
      });
  }

}


