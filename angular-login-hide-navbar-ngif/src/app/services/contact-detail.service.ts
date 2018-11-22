import {
    Http,RequestOptions,HttpModule,Headers, Response, ResponseContentType, 
    ConnectionBackend, RequestOptionsArgs, Request}
     from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../auth/user';


import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';


import {TestService} from '../services/test.service';









//import {ContactsComponent} from '../contacts/contacts.component';

interface recordsData {
    records: Array<any>;
}


@Injectable()
export class ContactDetailService implements OnInit{

    items : any;
    data: recordsData; 

    // get Header Credentials
    private contactDetailSubscriber = new Subject<any>();
    $contactDetailSubscriber = this.contactDetailSubscriber.asObservable();

    private productSubscriberMore = new Subject<any>();
    $productSubscriberMore = this.productSubscriberMore.asObservable();

    public apiOptions: RequestOptions;
    
    public localStorageToken: string;
    public localStorageAPIVersion: string;
    //public apiOptions: RequestOptions;
    public body: any;
    public url: string;
    public callType: string;

    
    ngOnInit(){

    }
    
    constructor(private http: Http){

    }
    
    private contactDetailApi = 'http://localhost/Angualr-Sugar-Auth-Api/angular-login-hide-navbar-ngif/sugarAPI/contact-detail.php';
    
    
    //GET SUGAR PRODUCT SERVICE;
    getContactDetail(contactId:string){
        
        let postData = localStorage.getItem('access_token');
        let formdata = new FormData();
        formdata.append('access_token', postData);
        this.http.post(this.contactDetailApi,formdata,{

        })
        .subscribe(
			(response) => {
                
                this.data = JSON.parse(response['_body']);
                this.items = this.data;
                this.contactDetailSubscriber.next(this.items);
                
                // console.log('sugar record offset: ', this.recordsOffset.next_offset);

                
                console.log('detail items: ',  this.items);
                console.log('contactId', contactId);
                return contactId;
                
                //debugger;
            }
        //.catch(this.handleError)
        ); 
    }



}
    

    