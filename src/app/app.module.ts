import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { HttpModule }               from "@angular/http";
import { FormsModule }              from "@angular/forms";
import { AppComponent }             from './app.component';
import { routing }                  from "./app.routing";

import { HeaderComponent }          from './components/layout/header/header.component';
import { MywinesOverviewComponent } from "./components/mywines/overview/overview.component";
import { MywinesDetailsComponent }  from './components/mywines/details/details.component';
import { WineComService }           from "./components/mywines/wine-com/wineCom.service";
import { MywinesStartComponent }    from './components/mywines/start/start.component';
import { OwnwinesComponent }        from './components/mywines/ownwines/ownwines.component';
import { CreateItemComponent }      from './components/mywines/create-item/create-item.component';
import { MywinesDataService }       from "./components/mywines/data/mywinesdata.service";

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
    MywinesOverviewComponent,
    MywinesDetailsComponent,
    MywinesStartComponent,
    OwnwinesComponent,
    CreateItemComponent ], // Components
  bootstrap:    [ AppComponent ],
  providers:    [
    WineComService,
    MywinesDataService ] // Services
})
export class AppModule { }
