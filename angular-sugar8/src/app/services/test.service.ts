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
export class TestService implements OnInit{
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
    
    ngOnInit(){

    }
    
    constructor(private http: Http){

    }
    
    private sugarProductsApi = 'http://localhost/Angualr-Sugar-Auth-Api/angular-sugar8/sugarAPI/SugarBodyCredentials.php';

    private showMOreAPI = 'http://localhost/Angualr-Sugar-Auth-Api/angular-sugar8/sugarAPI/showMore.php';
    
    //GET SUGAR PRODUCT SERVICE;
    getSugarProduct(){
        let postData = localStorage.getItem('access_token');
        let formdata = new FormData();
        formdata.append('access_token', postData);
        this.http.post(this.sugarProductsApi,formdata,{

        })
        .subscribe(
			(response) => {
                this.recordsOffset = JSON.parse(response['_body']);
                this.data = JSON.parse(response['_body']);
                this.items = this.data.records;
                this.productSubscriber.next(this.items);
                
                // GET next offset records
                localStorage.setItem('next_offset', this.recordsOffset.next_offset);
            }
        //.catch(this.handleError)
        ); 
    }

    // SHOW MORE RECORD LIST
    
    
    increaseShow(){
        console.log('icrease shwo');
        let showMore:any = 10;
        showMore += 10;

        let offset_records:any = localStorage.getItem('next_offset');
        let offsetRecords = offset_records;
        let offsetData = new FormData();
        
        let postData = localStorage.getItem('access_token');
        let formdata = new FormData();
        formdata.append('access_token', postData);
        formdata.append('next_offset', offsetRecords);
        formdata.append('show_more', showMore);
        this.http.post(this.showMOreAPI,formdata,{
            
        })
        .subscribe (
            (res)=> {
                this.data = JSON.parse(res['_body']);
                this.itemsmore = this.data.records;
                this.productSubscriberMore.next(this.itemsmore);
                console.log('new items', this.itemsmore);
            }
        )
        //this.show += 10;
    }


}
    

    