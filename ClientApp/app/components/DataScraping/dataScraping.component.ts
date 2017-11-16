import { Component } from '@angular/core';
import { ServiceMaster } from '../Services/ServiceMaster';
import { Http } from '@angular/http';
import { ScrappingMetric } from '../Models/Models'


@Component({
    selector: 'data-scraping',
    templateUrl: './dataScraping.component.html'
})
export class DataScrapingComponent {
    svc: ServiceMaster;
    http: Http;
    SearchID: string;
    Search: boolean;
    metricEdit: ScrappingMetric;
    edited: boolean;
    constructor(service: ServiceMaster, http: Http) {
        this.svc = service;
        this.http = http;
        this.Search = false;
        this.edited = false;
    }

    ngOnInit() {
        this.svc.getScrapping();


    }
}
