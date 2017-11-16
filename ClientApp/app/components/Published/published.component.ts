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
    SearchID: string;
    Search: boolean;
    metricEdit: Metric;
    metricsChecked: number[];
    edited: boolean;
    constructor(service: ServiceMaster, http: Http)
    {
        this.svc = service;
        this.http = http;
        this.Search = false
    }

    ngOnInit() {

            this.svc.getPublished();
        
        
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

    async SelectedModal(m: Metric)
    {
        await this.svc.getPublishedEdit(m.id.toString()).then(async response => {
            this.metricEdit = await response 

        }); 
        
    }

    clearModal() {
        this.metricEdit = new Metric();
    }
    hide()
    {
        this.metricsChecked = this.svc.publishedMetrics.filter(metric => metric.checked).map(metric => metric.id);
        this.svc.hideMetrics(this.metricsChecked);
        this.svc.getPublished();
        console.log("hiding" + this.metricsChecked.toString());
        this.Search = false;
        this.SearchID = "";
    }

    async submit() {
        await this.svc.stagingPost(this.metricEdit).then(async response => {
            this.edited = await response
        })
        
        this.Search = false;
        console.log("editing" + this.metricEdit.id.toString());
        this.SearchID = "";
        this.svc.getStaging();
    }
} 


