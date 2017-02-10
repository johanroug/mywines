import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { AppComponent }             from './app.component';

import { MywinesComponent }         from "./components/mywines/mywines.component";
import { MywinesOverviewComponent } from "./components/mywines/overview/overview.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    MywinesComponent,
    MywinesOverviewComponent ], // Components
  bootstrap:    [ AppComponent ],
  providers:    [ ] // Services
})
export class AppModule { }
