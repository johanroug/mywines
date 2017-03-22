import {Routes, RouterModule} from "@angular/router";

import {OverviewComponent} from "./components/mywines/overview/overview.component";
import {ONLINE_ROUTES} from "./components/mywines/online.routes";

import {OwnwinesComponent} from "./components/mywines/ownwines/ownwines.component";
import {OWN_ROUTES} from "./components/mywines/own.routes";

const APP_ROUTES: Routes = [
  {path: "", redirectTo: "/wines", pathMatch: "full"},
  {path: "wines", component: OverviewComponent, children: ONLINE_ROUTES},
  {path: "ownwines", component: OwnwinesComponent, children: OWN_ROUTES}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
