import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { AppComponent }             from './app.component';

import { MywinesComponent }         from "./components/mywines/mywines.component";
import { MywinesOverviewComponent } from "./components/mywines/overview/overview.component";
import {MywineWineService} from "./components/mywines/wine-com/mywines-wine.service";
import {HttpModule} from "@angular/http";

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [
    AppComponent,
    MywinesComponent,
    MywinesOverviewComponent ], // Components
  bootstrap:    [ AppComponent ],
  providers:    [ MywineWineService ] // Services
})
export class AppModule { }
