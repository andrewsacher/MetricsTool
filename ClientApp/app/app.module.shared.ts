import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { PublishedComponent } from './components/Published/published.component';
import { DataScrapingComponent } from './components/DataScraping/dataScraping.component';
import { StagingComponent } from './components/Staging/staging.component';
import { LoginComponent } from './components/Login/Login.component';
import { ServiceMaster } from './components/Services/ServiceMaster';
import { LoggedInGuard } from './components/Services/LoggedInGuard';
import { ProfileComponent } from './components/Profile/profile.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        StagingComponent,
        DataScrapingComponent,
        PublishedComponent,
        LoginComponent,
        ProfileComponent,
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'published', component: PublishedComponent, canActivate: [LoggedInGuard] },
            { path: 'staging', component: StagingComponent, canActivate: [LoggedInGuard] },
            { path: 'data-scraping', component: DataScrapingComponent, canActivate: [LoggedInGuard] },
            { path: 'login', component: LoginComponent },
            { path: 'profile', component: ProfileComponent, canActivate: [LoggedInGuard] },
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
