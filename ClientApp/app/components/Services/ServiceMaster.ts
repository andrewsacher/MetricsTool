import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Metric, Source, ScrappingMetric, Profile, SpreadSheet } from '../Models/Models';
import { toPromise } from "rxjs/operator/toPromise";

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
    public baseUrl: string;
    public scrappingMetrics: ScrappingMetric[];
    public result: string;
    public stagingChildren: Metric[];
    public parentIds: number[];
    public profile: Profile;
   

    constructor(http: Http, private router: Router, @Inject('BASE_URL') baseUrl: string) {
        this.http = http;
        this.loggedIn = false;
        this.stagingURL = 'http://simonpalsandbox.azurewebsites.net/api/v2/metrics';
        this.publishedURL = 'http://simonpalsandbox.azurewebsites.net/api/v2/metrics';
        this.baseUrl = baseUrl;
    }

    public async login(Username: string, Password: string): Promise<boolean> {
        var headers = new Headers();


        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        var url = 'http://simonpalsandbox.azurewebsites.net/api/v2/authentication';
        return this.http.post(url, JSON.stringify({ Username, Password }), options).toPromise()
            .then(response => {
                this.loggedIn = true;
                this.profile = response.json();
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


    public getPublished(): Promise<Metric[]>
    {
        var headers = new Headers();


        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + this.profile.SessionId);
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.publishedURL + '/', options).toPromise()
            .then(response => response.json() as Metric[]);
    }

    public getPublishedSearch(id: String): Promise<Metric[]> {
        var headers = new Headers();
        
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + this.profile.SessionId);
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.publishedURL + '?ids=' + id, options).toPromise()
            .then(response => response.json() as Metric[]);
    }

    public async getPublishedEdit(id: String): Promise<Metric> {
        var headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + this.profile.SessionId);
        let options = new RequestOptions({ headers: headers });
        return await this.http.get(this.publishedURL + '/' + id, options).toPromise()
            .then(response => response.json() as Metric);
        
    }

    public getStaging(): Promise<Metric[]> {
        var headers = new Headers();


        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + this.profile.SessionId);
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.stagingURL + '/', options).toPromise()
            .then(response => response.json() as Metric[]);
    }

    public async getStagingSearch(id: String):Promise<Metric[]> {
        var headers = new Headers();
        
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + this.profile.SessionId);
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.stagingURL + '?ids=' + id, options).toPromise()
            .then(response => response.json() as Metric[]);
    }

    public getStagingChildren(metric: Metric): Promise<Metric[]>
    {

        var headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + this.profile.SessionId);
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.stagingURL + '?ids=' + metric.children.toString(), options).toPromise()
            .then(response => response.json() as Metric[]);
    }

    public async getStagingEdit(id: String): Promise<Metric> {
        var headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + this.profile.SessionId);
        let options = new RequestOptions({ headers: headers });
        return await this.http.get(this.stagingURL + '/' + id, options).toPromise()
            .then(response => response.json() as Metric);

    }

    public async stagingPost(m: Metric): Promise<boolean> {

        var headers = new Headers();


        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + this.profile.SessionId);
        let options = new RequestOptions({ headers: headers });
        var response = false;
        var url = this.stagingURL + "/update";
        var body = JSON.stringify(m);
        this.http.put(url, body, options).subscribe(
            data => {
                response = true;
            },
            error => {
                console.error("Error saving!");
                //return Observable.throw(error);
            }
        );
        return response;
    }

    public async getStagingSource(MetricID: number): Promise<Source[]> {
        var headers = new Headers();


        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + this.profile.SessionId);
        let options = new RequestOptions({ headers: headers });

        return await this.http.get("http://simonpalsandbox.azurewebsites.net/api/v2/sources?ids=" + MetricID, options).toPromise()
            .then(response => response.json() as Source[]);
    }

    public hideMetrics(Metrics: number[])
    {
        var headers = new Headers();


        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + this.profile.SessionId);
        let options = new RequestOptions({ headers: headers });

        this.http.put(this.publishedURL + "/hide/" + Metrics.toString(), options).subscribe(
            data => {
                return true;
            },
            error => {
                console.error("Error saving!");
                //return Observable.throw(error);
            }
        );;
    }

    public async profilePost(): Promise<boolean> {

        var headers = new Headers();


        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + this.profile.SessionId);
        let options = new RequestOptions({ headers: headers });
        var response = false;
        var url = 'http://simonpalsandbox.azurewebsites.net/api/v2/authentication'; 
        var body = JSON.stringify(this.profile);
        this.http.post(url, body, options).subscribe(
            data => {
                response = true;
            },
            error => {
                console.error("Error saving!");
                //return Observable.throw(error);
            }
        );
        return response;
    }

    public  getScrapping() {
        return this.http.get(this.baseUrl + 'api/scraping/DataScrapping').subscribe(response => {
            this.scrappingMetrics = response.json() as ScrappingMetric[]  
        });
    }

    public async GetAllStagingSources()
    {
        var headers = new Headers();


        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + this.profile.SessionId);
        let options = new RequestOptions({ headers: headers });

        return await this.http.get("http://simonpalsandbox.azurewebsites.net/api/v2/sources", options).toPromise()
            .then(response => response.json() as Source[]);
    }

    public async getSpreadSheets() {
        var headers = new Headers();


        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + this.profile.SessionId);
        let options = new RequestOptions({ headers: headers });

        return await this.http.get("http://simonpalsandbox.azurewebsites.net/api/v2/spreadsheets", options).toPromise()
            .then(response => response.json() as SpreadSheet[]);
    }
}
