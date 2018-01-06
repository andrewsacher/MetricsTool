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
    loading: boolean;
    constructor(service: ServiceMaster)
    {
        this.svc = service;
        this.saved = false;
    }

    ngOnInit() {

    }

    Save()
    {
        this.loading = true;
        this.svc.profilePost().then(response => {
            this.saved = response;
            //this.loading = false;
            if (this.saved)
            {
                alert("Your changes have been saved");
                
            }
            else {
                alert("Could not save profile");
            }

        });
    }

} 


