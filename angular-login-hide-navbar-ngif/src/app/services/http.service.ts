import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../auth/user';

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
    constructor(private http: Http){

    }

    ngOnInit() {
       //this.getUserDetails('', ''); 
    }
    private sugarTokenApii = 'http://localhost/Angualr-Sugar-Auth-Api/angular-login-hide-navbar-ngif/sugarAPI/checkLoginCredentials.php';
    getUserDetails(user_name, password){
        this.http.post(this.sugarTokenApii, {
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

    // checkLoginCredentials(){
    //     this.http.get('http://localhost/angular-login-hide-navbar/angular-login-hide-navbar-ngif/sugarAPI/checkLoginCredentials.php', {})
    //     .subscribe(
	// 		(response) => {
	// 			//this.data = JSON.parse(response['_body']);
	// 		    //console.log("credentials", this.data);
	// 		},
	// 		err => console.log(err), // error
	// 		() => console.log('getUserStatus Complete for login') // complete
	// 	);
    // }
}