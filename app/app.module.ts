import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { BohaterzyComponent } from './bohaterzy/bohaterzy.component';
import { SzczegolyBohaterowComponent } from './szczegoly-bohaterow/szczegoly-bohaterow.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { WiadomosciComponent } from './wiadomosci/wiadomosci.component';
import {  WyszukajBohateraComponent } from './wyszukaj-bohatera/wyszukaj-bohatera.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BohaterzyComponent,
    SzczegolyBohaterowComponent,
    WiadomosciComponent,
    DashboardComponent,
    WyszukajBohateraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
