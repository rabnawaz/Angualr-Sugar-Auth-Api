import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private contactDetailService: ContactDetailService, private router: Router) {
      // debugger;
      // this.contactDetailService.getContactDetail();
      this.contactDetailService.$contactDetailSubscriber.subscribe(data => {
        this.items = data;
      });

      
  }
  backToContactList(){
    this.router.navigate(['/contacts']);
  }

}


