import { Component } from '@angular/core';
import { ServiceMaster } from '../Services/ServiceMaster';
import { Http } from '@angular/http';
import { Metric, Source, Meta } from '../Models/Models'; 

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
    sources: Source[];
    edited: boolean;
    meta: Meta;
    me: Meta;
    def: boolean;
    foot: boolean;
    stagingMetrics: Metric[];
    stagingChildren: Metric[];
    allSources: Source[];

    constructor(service: ServiceMaster, http: Http) {
        this.svc = service;
        this.http = http;
        this.Search = false;
        this.edited = false;
        this.foot = false;
        this.def = false;
    }

    ngOnInit() {
        //this.svc.getStaging().then(response => {
        //    this.stagingMetrics =  response
        //});
    }

    async search() {
        this.Search = true;
        await this.svc.getStagingSearch(this.SearchID).then(response => {
            this.stagingMetrics = response
        });
        if (this.stagingMetrics.length > 0) {
            if (this.stagingMetrics[0].children.length != 0) {
                this.svc.getStagingChildren(this.stagingMetrics[0]).then(response => {
                    this.stagingChildren = response
                });
            }
            else {
                var m = new Metric();
                m.id = -1;
                this.stagingChildren[0] = m;
            }
        }
    }

    back() {
        this.Search = false;
        this.SearchID = "";
        this.svc.getStaging().then(response => {
            this.stagingMetrics = response
        });
        
    }

    async SelectedModal(m: Metric) {
        await this.svc.getStagingEdit(m.id.toString()).then(async response => {
            this.metricEdit = await response

        });
        if (this.metricEdit.meta.length > 0)
        {
            for (var i = 0; i < this.metricEdit.meta.length; i++)
            {
                this.me = this.metricEdit.meta[i];
                if (this.me.type.charAt(0) == 'D')
                {
                    this.def = true;
                }
                else if (this.me.type.charAt(0) == 'F')
                {
                    this.foot = true;
                }
            }
        }
        await this.svc.getStagingSource(m.id).then(async response => {
            this.sources = await response
        });

    }
    clearModal() {
        this.metricEdit = new Metric(); 
        this.foot = false;
        this.def = false;
    }
    async submit()
    {
        await this.svc.stagingPost(this.metricEdit).then(async response => {
            this.edited = await response
        })
        //this.svc.getStaging();
        //this.Search = false;
        console.log("editing" + this.metricEdit.id.toString());
        //this.SearchID = "";
    }
    addDef() {
        this.meta = new Meta();
        this.meta.type = "Definition",
        this.meta.data = ""
        this.metricEdit.meta[this.metricEdit.meta.length] = this.meta;
        this.def = true;
    }

    addFoot() {
        this.meta = new Meta();
        this.meta.type = "Footnotes",
        this.meta.data = ""
        this.metricEdit.meta[this.metricEdit.meta.length] = this.meta;
        this.foot = true;
    }

    async getAllSource() {
        await this.svc.GetAllStagingSources().then(async response => {
            this.allSources = await response
        });
    }

    async goTo(id: number)
    {
        this.Search = true;
        this.SearchID = id.toString(); 
        await this.svc.getStagingSearch(this.SearchID).then(response => {
            this.stagingMetrics = response
        });
        if (this.stagingMetrics[0].children.length != 0) {
            this.svc.getStagingChildren(this.stagingMetrics[0]).then(response => {
                this.stagingChildren = response
            });
        }
        else {
            var m = new Metric();
            m.id = -1;
            this.stagingChildren[0] = m;
        }
    }
}
