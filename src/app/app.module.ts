import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { HttpModule }               from "@angular/http";
import { AppComponent }             from './app.component';

import { MywinesComponent }         from "./components/mywines/mywines.component";
import { MywinesOverviewComponent } from "./components/mywines/overview/overview.component";
import { MywineWineService }        from "./components/mywines/wine-com/mywines-wine.service";
import { HeaderComponent }          from './components/layout/header/header.component';
import { DetailsComponent }         from './components/mywines/details/details.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [
    AppComponent,
    HeaderComponent,
    MywinesComponent,
    MywinesOverviewComponent,
    HeaderComponent,
    DetailsComponent ], // Components
  bootstrap:    [ AppComponent ],
  providers:    [ MywineWineService ] // Services
})
export class AppModule { }
