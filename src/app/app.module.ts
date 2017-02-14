import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { HttpModule }               from "@angular/http";
import { AppComponent }             from './app.component';

import { HeaderComponent }          from './components/layout/header/header.component';
import { MywinesComponent }         from "./components/mywines/mywines.component";
import { MywinesOverviewComponent } from "./components/mywines/overview/overview.component";
import { MywinesDetailsComponent }  from './components/mywines/details/details.component';
import { WineComService }           from "./components/mywines/wine-com/wineCom.service";
import { routing }                  from "./app.routing";
import { MywinesStartComponent }    from './components/mywines/start/start.component';
import { OwnwinesComponent } from './components/mywines/ownwines/ownwines.component';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    MywinesComponent,
    MywinesOverviewComponent,
    MywinesDetailsComponent,
    MywinesStartComponent,
    OwnwinesComponent ], // Components
  bootstrap:    [ AppComponent ],
  providers:    [ WineComService ] // Services
})
export class AppModule { }
