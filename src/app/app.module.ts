import 'hammerjs';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import './rxjs-extensions';

import {InMemoryDataService} from './in-memory-data.service';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {ConfigDetailComponent} from './config-detail/config-detail.component';

import {ConfigService} from './config.service';

@NgModule({
    declarations: [
        AppComponent,
        ConfigDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    providers: [ConfigService],
    bootstrap: [AppComponent]
})
export class AppModule { }
