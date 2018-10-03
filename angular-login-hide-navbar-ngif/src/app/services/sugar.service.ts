import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

interface recordsData {
    records: Array<any>;
}

@Injectable()
export class SugarService implements OnInit {
    items : Array<any>;
    data: recordsData;
    constructor(private http: Http){

    }

    ngOnInit() {
       //this.getUserDetails('', ''); 
    }
    
    getUserDetails(username, password, callback){
        this.http.get('http://localhost/SugarApi.php', {})
        .subscribe(
			(response) => {
				
				this.data = JSON.parse(response['_body']);
				this.items = this.data.records;
				callback(this.items);
				//console.log(data); 
				//this.items = data.records;

			   //console.log("My data", data);
			},
			err => console.log(err), // error
			() => console.log('getUserStatus Complete') // complete
		);
    }
}