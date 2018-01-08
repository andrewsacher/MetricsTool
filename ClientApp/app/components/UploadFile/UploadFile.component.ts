import { Component } from '@angular/core';
import { ServiceMaster } from '../Services/ServiceMaster';
import { Http } from '@angular/http';
import { Metric, SpreadSheet, fileUpload } from '../Models/Models';
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
    uploaded: boolean;
    files: fileUpload[];
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

        this.svc.getAllUploaded().then(response => {
            this.files = response;
            console.log(this.files[0].UploadedTime);
        });
    }

    onSelect(newSheet : SpreadSheet) {  
        this.selectedType = newSheet;
    }

    upload()
    {
        if (this.selectedType.id != -1) {
            console.log(this.selectedType.SheetName);
            console.log(this.selectedSheet.name);
            this.svc.uploadFile(this.selectedSheet, this.selectedType).then(async response => {
                this.uploaded = await response;
                
            });
            this.svc.getAllUploaded().then(response => {
                this.files = response;
                console.log(this.files[0].UploadedTime);
            });
                
        }
        
        
    }

    chooseFile(newFile: any)
    {
        this.selectedSheet = newFile.path[0].files[0];
        
    }

  

} 


