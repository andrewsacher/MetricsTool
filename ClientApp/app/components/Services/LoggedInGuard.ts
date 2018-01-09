import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ServiceMaster } from './ServiceMaster';

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private svc: ServiceMaster, private router: Router) { }

    canActivate() {
        if (this.svc.isLoggedin() ) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
        
    }

}
