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
    private sugarTokenApi = 'http://localhost/angular-login-hide-navbar/angular-login-hide-navbar-ngif/sugarAPI/checkLoginCredentials.php';
    private sugarProductsApi = 'http://localhost/angular-login-hide-navbar/angular-login-hide-navbar-ngif/sugarAPI/SugarApiHeaderCredentials.php';
    getSugarApiAuth(user_name, password){
        this.http.post(this.sugarTokenApi, {
            user_name:'admin2',
            password:'@dmin111'
            
        })
        .subscribe(
			(response) => {
				
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
    }

    

    apiOptionsDecide(options) {
        this.localStorageToken = 'bearer ' + localStorage.getItem('token');
        this.localStorageAPIVersion = localStorage.getItem('api_version');
        if (options === 'json') {
            const contentTypeJsonHeaders = new Headers();
            contentTypeJsonHeaders.append('Content-Type', 'application/json');
            contentTypeJsonHeaders.append('Authorization', this.localStorageToken);
            return new RequestOptions({ headers: contentTypeJsonHeaders });
        }

    }
    //get Sugar Products
    getSugarProducts(){
        this.http.get(this.sugarProductsApi, {})
        .subscribe(
			(response) => {
                debugger;
				this.data = JSON.parse(response['_body']);
			    console.log("header Credential 2nd call", this.data);
			},
			err => console.log(err), // error
			() => console.log('getUserStatus Complete for login') // complete
		);
    }
}