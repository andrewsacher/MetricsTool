import { Component } from '@angular/core';
import { ServiceMaster } from '../Services/ServiceMaster';
import { Http } from '@angular/http';
import { Metric, Source } from '../Models/Models'; 

@Component({
    selector: 'staging',
    templateUrl: './staging.component.html'
})
export class StagingComponent {
    svc: ServiceMaster;
    http: Http;
    SearchID: string;
    Search: boolean;
    metricEdit: Metric;
    sources: Source[]
    constructor(service: ServiceMaster, http: Http) {
        this.svc = service;
        this.http = http;
        this.Search = false
    }

    ngOnInit() {
        if (this.svc.stagingMetrics == null) {
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

    async SelectedModal(m: Metric) {
        await this.svc.getPublishedEdit(m.id.toString()).then(async response => {
            this.metricEdit = await response

        });
        await this.svc.getStagingSource(m.id).then(async response => {
            this.sources = await response
        });

    }
    clearModal() {
        this.metricEdit = new Metric();
    }
    submit()
    {
        this.svc.stagingPost(this.metricEdit);
        this.svc.getStaging();
    }
}
