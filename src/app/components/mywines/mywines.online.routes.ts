import {Routes} from "@angular/router";
import {MywinesStartComponent} from "./start/start.component";
import {MywinesDetailsComponent} from "./details/details.component";

export const MYWINES_ONLINE_ROUTES: Routes = [
  {path: "", component: MywinesStartComponent},
  {path: ":id", component: MywinesDetailsComponent}
];
