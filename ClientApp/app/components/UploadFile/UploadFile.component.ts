import { Component } from '@angular/core';
import { ServiceMaster } from '../Services/ServiceMaster';
import { Http } from '@angular/http';
import { Metric, SpreadSheet } from '../Models/Models';
import { FormsModule } from '@angular/forms';
import { Params } from '@angular/router';

@Component({
    selector: 'upload_file',
    templateUrl: './UploadFile.component.html'
})
export class UploadFileComponent {
    svc: ServiceMaster;
    spreadSheets: SpreadSheet[];
    selectedType: SpreadSheet;
    selectedSheet: File;
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
            this.selectedType = this.spreadSheets[0];
        });
    }

    onSelect(newSheet : SpreadSheet) {  
        this.selectedType = newSheet;
    }

    upload()
    {
        console.log(this.selectedType.SheetName);
        console.log(this.selectedSheet.name);
    }

    chooseFile(newFile: any)
    {
        this.selectedSheet = newFile.path[0].files[0];
    }

  

} 


