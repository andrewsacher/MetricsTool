import { Component } from '@angular/core';
import { ServiceMaster } from '../Services/ServiceMaster';
import { Http } from '@angular/http';
import { Metric } from '../Models/Models';

@Component({
    selector: 'upload_file',
    templateUrl: './UploadFile.component.html'
})
export class UploadFileComponent {
    svc: ServiceMaster;
    constructor(service: ServiceMaster)
    {
        this.svc = service;
    }

    ngOnInit() {

    }

  

} 


