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

//import {ContactsComponent} from '../contacts/contacts.component';

interface recordsData {
    records: Array<any>;
}

interface sugarProducts {
    next_offset: any;
    records: Array<any>;
}

@Injectable()
export class LoginService implements OnInit{
    items : Array<any>;
    itemsmore : Array<any>;
    data: recordsData; 
    recordsOffset: sugarProducts;
    loginCredentail;
    private subscribeService = new Subject<any>();
    $subscribeService = this.subscribeService.asObservable();
    // get Header Credentials
    private productSubscriber = new Subject<any>();
    $productSubscriber = this.productSubscriber.asObservable();

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
    
    private sugarTokenApi = 'http://localhost/Angualr-Sugar-Auth-Api/angular-sugar8/sugarAPI/checkLoginCredentials.php';
    
    getSugarApiAuth(userName: string, password: string){
        //Login user/password post request
        //debugger;
        let userParam_obj = new FormData();
        userParam_obj.append('username' , userName);
        userParam_obj.append('password' , password);

        this.http.post(this.sugarTokenApi,userParam_obj,{
            
        })
        .subscribe(
			(response) => {
                console.log(userParam_obj, 'userParam_obj');
                let responsedata = JSON.parse(response['_body']);
                console.log('response for header', responsedata);

                localStorage.setItem('access_token', responsedata.access_token);
                localStorage.setItem('expires_in', responsedata.expires_in);
                localStorage.setItem('refresh_token', responsedata.refresh_token);
            },
            
			err => console.log(err), // error
			() => console.log('getUserStatus Complete') // complete
        );

         
    }
    


}
    

    