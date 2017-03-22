import {Routes} from "@angular/router";
import {StartComponent} from "./start/start.component";
import {DetailsComponent} from "./details/details.component";

export const ONLINE_ROUTES: Routes = [
  {path: "", component: StartComponent},
  {path: ":id", component: DetailsComponent}
];
