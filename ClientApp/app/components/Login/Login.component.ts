import { Component} from '@angular/core';
import { Http } from '@angular/http';
import { ServiceMaster } from '../Services/ServiceMaster'; 
import { Router } from '@angular/router'; 
import 'rxjs/add/operator/toPromise';


@Component({
    selector: 'login',
    templateUrl: './Login.component.html'
})
export class LoginComponent {
    svc: ServiceMaster;
    user: string;
    pass: string;
    wrongLogin: boolean;


    constructor(service: ServiceMaster, private router: Router)
    {
        this.svc = service;
        this.wrongLogin = false;  
    }

    async Login()
    {
        var log: boolean;
        this.svc.login(this.user, this.pass).then(loggedIn => {
            log = loggedIn
            this.wrongLogin = !log
            if (log)
            {
                this.router.navigate(['/staging'])
            }
            
            
        });
        
        
        
    }

}