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

interface recordsData {
    records: Array<any>;
}

@Injectable()
export class TestService implements OnInit{
    items : Array<any>;
    data: recordsData;
    loginCredentail;
    private subscribeService = new Subject<any>();
    $subscribeService = this.subscribeService.asObservable();

    // get Header Credentials
    public apiOptions: RequestOptions;
    
    public localStorageToken: string;
    public localStorageAPIVersion: string;
    //public apiOptions: RequestOptions;
    public body: any;
    public url: string;
    public callType: string;

    constructor(private http: Http){

    }

    ngOnInit() {
       //this.getUserDetails('', ''); 
    }
    private sugarTokenApi = 'http://localhost/Angualr-Sugar-Auth-Api/angular-login-hide-navbar-ngif/sugarAPI/checkLoginCredentials.php';
    private sugarProductsApi = 'http://localhost/Angualr-Sugar-Auth-Api/angular-login-hide-navbar-ngif/sugarAPI/SugarBodyCredentials.php';
    
    getSugarApiAuth(user_name, password){
        // const contentTypeFormHeaders = new Headers({ 
        //     'Content-Type': 'application/json'});
        //     contentTypeFormHeaders.append('Authorization', localStorage.getItem('access_token'));
        this.http.post(this.sugarTokenApi, {
            user_name:'admin2',
            password:'@dmin111',
            
        })//, new RequestOptions({headers: contentTypeFormHeaders}))
        .subscribe(
			(response) => {
                //console.log(contentTypeFormHeaders);
                debugger;
                let responsedata = JSON.parse(response['_body']);
                console.log('response for header', responsedata);

                // //debugger;
                // console.log("My data", responsedata);
                // console.log('user/password' , user_name, password);

                localStorage.setItem('access_token', responsedata.access_token);
                localStorage.setItem('expires_in', responsedata.expires_in);
                localStorage.setItem('refresh_token', responsedata.refresh_token);
                localStorage.setItem('user_name', user_name);
                localStorage.setItem('refresh_token', password);
			},
			err => console.log(err), // error
			() => console.log('getUserStatus Complete') // complete
        );
    }

    //GET SUGAR PRODUCT SERVICE;
    getSugarProduct(){
        //const contentTypeFormHeaders = new Headers({ 'Content-Type': 'application/json', 'OAuth-Token': localStorage.getItem('access_token')});
        // contentTypeFormHeaders.append();
        //console.log('get auth ', localStorage.getItem('access_token'));
        this.http.get(this.sugarProductsApi)
        .subscribe(
			(response) => {
                debugger;
                console.log('response for data', response);
                this.data = JSON.parse(response['_body']);
                // this.items = this.data.records;
                // callback(this.items);
                console.log('record data', this.data);
            }
        //.catch(this.handleError)
        );
        
       
    }


}
    

    