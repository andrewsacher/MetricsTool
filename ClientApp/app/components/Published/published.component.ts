import { Component } from '@angular/core';
import { ServiceMaster } from '../Services/ServiceMaster';
import { Http } from '@angular/http';
import { Metric } from '../Models/Models';

@Component({
    selector: 'published',
    templateUrl: './published.component.html'
})
export class PublishedComponent {
    svc: ServiceMaster;
    http: Http;
    test: Metric[];
    SearchID: string;
    Search: boolean;
    constructor(service: ServiceMaster, http: Http)
    {
        this.svc = service;
        this.http = http;
        this.Search = false
    }

    ngOnInit() {
        if (this.svc.publishedMetrics == null)
        {
            this.svc.getPublished();
        }
        
        
    }

    search()
    {
        this.Search = true;
        this.svc.getPublishedSearch(this.SearchID);
    }

    back() {
        this.Search = false;
        this.SearchID = "";
        this.svc.getPublished();
    }
}
