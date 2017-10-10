import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Metric } from '../Models/Models';

@Injectable()
export class ServiceMaster {

    public http: Http;
    public loggedIn: boolean
    public response: string;
    public publishedMetrics: Metric[];
    public i: number;
    public noneFoundPublished: boolean

    constructor(http: Http, private router: Router) {
        this.http = http;
        this.loggedIn = false;
    }

    public async login(email: string, password: string): Promise<boolean> {
        var headers = new Headers();


        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        var url = 'http://usafacts-api-staging.azurewebsites.net/api/v2/authentication';
        return this.http.post(url, JSON.stringify({ email, password }), options).toPromise()
            .then(response => {
                this.loggedIn = true;
                return Promise.resolve(this.loggedIn);
            })
            .catch(error => {
                this.loggedIn = false;
                return Promise.resolve(this.loggedIn);
            });






    }
    public isLoggedin() {
        return this.loggedIn;
    }


    public getPublished()
    {
        var headers = new Headers();


        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic d9448c61-936d-4717-8aa8-cba9a4903d57');
        let options = new RequestOptions({ headers: headers });
        var url = 'http://usafacts-api.azurewebsites.net/api/v2/metrics/'
        this.http.get(url, options).subscribe(result => {
            this.publishedMetrics = result.json();
            


        });
    }

    public getPublishedSearch(id: String) {
        var headers = new Headers();
        3
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic d9448c61-936d-4717-8aa8-cba9a4903d57');
        let options = new RequestOptions({ headers: headers });
        var url = 'http://usafacts-api.azurewebsites.net/api/v2/metrics?ids='
        this.http.get(url + id, options).subscribe(result => {
            if (result.bytesLoaded == undefined) {
                this.publishedMetrics = result.json();
                this.publishedMetrics[0] = new Metric();
                this.publishedMetrics[0].lexicon_name = "No Metrics Found";
                this.publishedMetrics[0].id = -1

            }
            else {
                this.publishedMetrics = result.json();
            }
            
            
        });
    }
}
