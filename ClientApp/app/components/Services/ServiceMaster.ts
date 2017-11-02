import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Metric, Source } from '../Models/Models';

@Injectable()
export class ServiceMaster {

    public http: Http;
    public loggedIn: boolean
    public response: string;
    public publishedMetrics: Metric[];
    public stagingMetrics: Metric[];
    public stagingURL: string;
    public publishedURL: string;
    public publishedEditMetric: Metric;
   

    constructor(http: Http, private router: Router) {
        this.http = http;
        this.loggedIn = false;
        this.stagingURL = 'http://simonpalsandbox.azurewebsites.net/api/v2/metrics';
        this.publishedURL = 'http://usafacts-api.azurewebsites.net/api/v2/metrics';
    }

    public async login(email: string, password: string): Promise<boolean> {
        var headers = new Headers();


        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        var url = 'http://simonpalsandbox.azurewebsites.net/api/v2/authentication';
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
        this.http.get(this.publishedURL +'/', options).subscribe(result => {
            this.publishedMetrics = result.json();
            


        });
    }

    public getPublishedSearch(id: String) {
        var headers = new Headers();
        
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic d9448c61-936d-4717-8aa8-cba9a4903d57');
        let options = new RequestOptions({ headers: headers });
        this.http.get(this.publishedURL + '?ids=' + id, options).subscribe(data => {
            
                this.publishedMetrics = data.json();  
        });
    }

    public async getPublishedEdit(id: String): Promise<Metric> {
        var headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic d9448c61-936d-4717-8aa8-cba9a4903d57');
        let options = new RequestOptions({ headers: headers });
        return await this.http.get(this.publishedURL + '/' + id, options).toPromise()
            .then(response => response.json() as Metric);
        
    }

    public getStaging() {
        var headers = new Headers();


        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic d9448c61-936d-4717-8aa8-cba9a4903d57');
        let options = new RequestOptions({ headers: headers });
        this.http.get(this.stagingURL + '/', options).subscribe(result => {
            this.stagingMetrics = result.json();



        });
    }

    public getStagingSearch(id: String) {
        var headers = new Headers();
        
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic d9448c61-936d-4717-8aa8-cba9a4903d57');
        let options = new RequestOptions({ headers: headers });
        this.http.get(this.stagingURL + '?ids=' + id, options).subscribe(data => {

            this.stagingMetrics = data.json();
        });
    }

    public async getStagingEdit(id: String): Promise<Metric> {
        var headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic d9448c61-936d-4717-8aa8-cba9a4903d57');
        let options = new RequestOptions({ headers: headers });
        return await this.http.get(this.stagingURL + '/' + id, options).toPromise()
            .then(response => response.json() as Metric);

    }

    public stagingPost(m: Metric) {

        var headers = new Headers();


        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic d9448c61-936d-4717-8aa8-cba9a4903d57');
        let options = new RequestOptions({ headers: headers });

        var url = this.stagingURL + "/update";
        var body = JSON.stringify(m);
        this.http.put(url, body, options).subscribe(
            data => {
                return true;
            },
            error => {
                console.error("Error saving!");
                //return Observable.throw(error);
            }
        );;
    }

    public async getStagingSource(MetricID: number): Promise<Source[]> {
        var headers = new Headers();


        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic d9448c61-936d-4717-8aa8-cba9a4903d57');
        let options = new RequestOptions({ headers: headers });

        return await this.http.get("http://simonpalsandbox.azurewebsites.net/api/v2/sources?ids=" + MetricID, options).toPromise()
            .then(response => response.json() as Source[]);
    }
}
