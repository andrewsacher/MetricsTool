import { Component } from '@angular/core';
import { ServiceMaster } from '../Services/ServiceMaster';
import { Http } from '@angular/http';
import { Metric, SpreadSheet } from '../Models/Models';

@Component({
    selector: 'upload_file',
    templateUrl: './UploadFile.component.html'
})
export class UploadFileComponent {
    svc: ServiceMaster;
    spreadSheets: SpreadSheet[];
    selectedType: SpreadSheet;
    constructor(service: ServiceMaster)
    {
        this.svc = service;
    }

    ngOnInit() {
        this.svc.getSpreadSheets().then(response => {
            this.spreadSheets = response;
            var m = new SpreadSheet();
            m.id = -1;
            m.SheetName = "--Choose Sheet Type--";
            this.spreadSheets.unshift(m);
            //this.selectedType = this.spreadSheets[0];
        });
    }

    onSelect(newSpreadSheet: SpreadSheet) {  
        this.selectedType = newSpreadSheet;
    }

  

} 


