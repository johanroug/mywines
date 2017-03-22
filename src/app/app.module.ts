import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { HttpModule }               from "@angular/http";
import { FormsModule }              from "@angular/forms";
import { AppComponent }             from './app.component';
import { routing }                  from "./app.routing";

import { HeaderComponent }          from './components/layout/header/header.component';
import { OverviewComponent }        from "./components/mywines/overview/overview.component";
import { DetailsComponent }         from './components/mywines/details/details.component';
import { WineComService }           from "./components/mywines/wine-com/wineCom.service";
import { StartComponent }           from './components/mywines/start/start.component';
import { OwnwinesComponent }        from './components/mywines/ownwines/ownwines.component';
import { CreateItemComponent }      from './components/mywines/create-item/create-item.component';
import { DataService }              from "./components/mywines/data/data.service";

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    OverviewComponent,
    DetailsComponent,
    StartComponent,
    OwnwinesComponent,
    CreateItemComponent ], // Components
  bootstrap:    [ AppComponent ],
  providers:    [
    WineComService,
    DataService ] // Services
})
export class AppModule { }
