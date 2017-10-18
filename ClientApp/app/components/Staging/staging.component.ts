import { Component } from '@angular/core';
import { ServiceMaster } from '../Services/ServiceMaster';
import { Http } from '@angular/http';
import { Metric } from '../Models/Models'; 

@Component({
    selector: 'staging',
    templateUrl: './staging.component.html'
})
export class StagingComponent {
    svc: ServiceMaster;
    http: Http;
    SearchID: string;
    Search: boolean;
    constructor(service: ServiceMaster, http: Http) {
        this.svc = service;
        this.http = http;
        this.Search = false
    }

    ngOnInit() {
        if (this.svc.publishedMetrics == null) {
            this.svc.getStaging();
        }


    }

    search() {
        this.Search = true;
        this.svc.getStagingSearch(this.SearchID);
    }

    back() {
        this.Search = false;
        this.SearchID = "";
        this.svc.getStaging();
    }
}
