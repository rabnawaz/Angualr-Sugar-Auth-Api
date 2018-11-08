import {
    Http, RequestOptions, Headers,HttpModule, Response, ResponseContentType,
    ConnectionBackend, RequestOptionsArgs, Request}
     from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../auth/user';



import {HttpHeaders} from '@angular/common/http';



//import 'rxjs/add/operator/catch';


interface recordsData {
    records: Array<any>;
}

@Injectable()
export class TestService {
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

    constructor(private http: Http, defaultOptions: RequestOptions){

    }

    ngOnInit() {
       //this.getUserDetails('', ''); 
    }
    private sugarTokenApi = 'http://localhost/Angualr-Sugar-Auth-Api/angular-login-hide-navbar-ngif/sugarAPI/checkLoginCredentials.php';
    private sugarProductsApi = 'http://localhost/Angualr-Sugar-Auth-Api/angular-login-hide-navbar-ngif/sugarAPI/sugarAPI/SugarApiHeaderCredentials.php';
    getSugarApiAuth(user_name, password){
        this.http.post(this.sugarTokenApi, {
            user_name:'admin2',
            password:'@dmin111'
            
        })
        
        .subscribe(
			(response) => {
				console.log(response);
                const responsedata = JSON.parse(response['_body']);
                //debugger;
                console.log("My data", responsedata);
                console.log('user/password' , user_name, password);

                localStorage.setItem('access_token', responsedata.access_token);
                localStorage.setItem('expires_in', responsedata.expires_in);
                localStorage.setItem('refresh_token', responsedata.refresh_token);
                localStorage.setItem('user_name', user_name);
                localStorage.setItem('refresh_token', password);
			},
			err => console.log(err), // error
			() => console.log('getUserStatus Complete') // complete
        );
        this.localStorageToken = 'bearer ' + localStorage.getItem('token');
        this.localStorageAPIVersion = localStorage.getItem('api_version');

        //return this.http.post();
    }

    

    
}