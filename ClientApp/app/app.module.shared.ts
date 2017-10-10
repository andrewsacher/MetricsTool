import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { PublishedComponent } from './components/Published/published.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { LoginComponent } from './components/Login/Login.component';
import { ServiceMaster } from './components/Services/ServiceMaster';
import { LoggedInGuard } from './components/Services/LoggedInGuard';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        PublishedComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'published', component: PublishedComponent, canActivate: [LoggedInGuard] },
            { path: 'counter', component: CounterComponent, canActivate: [LoggedInGuard] },
            { path: 'fetch-data', component: FetchDataComponent, canActivate: [LoggedInGuard] },
            { path: 'login', component: LoginComponent },
            { path: '**', redirectTo: 'login' }
        ])
    ],
    providers: [
        ServiceMaster,
        LoggedInGuard 
]
})
export class AppModuleShared {
}
