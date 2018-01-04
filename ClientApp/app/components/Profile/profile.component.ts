import { Component } from '@angular/core';
import { ServiceMaster } from '../Services/ServiceMaster';
import { Http } from '@angular/http';
import { Metric } from '../Models/Models';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html'
})
export class ProfileComponent {
    svc: ServiceMaster;
    saved: boolean;
    constructor(service: ServiceMaster)
    {
        this.svc = service;
        this.saved = false;
    }

    ngOnInit() {

    }

    Save()
    {
        this.svc.profilePost().then(response => {
            this.saved = response;
            if (!this.saved)
            {

            }

        });
    }

} 


