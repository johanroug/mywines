import {Routes, RouterModule} from "@angular/router";

import {MywinesOverviewComponent} from "./components/mywines/overview/overview.component";
import {MYWINES_ONLINE_ROUTES} from "./components/mywines/mywines.online.routes.ts";

import {OwnwinesComponent} from "./components/mywines/ownwines/ownwines.component";
import {MYWINES_OWN_ROUTES} from "./components/mywines/mywines.own.routes";

const APP_ROUTES: Routes = [
  {path: "", redirectTo: "/wines", pathMatch: "full"},
  {path: "wines", component: MywinesOverviewComponent, children: MYWINES_ONLINE_ROUTES},
  {path: "ownwines", component: OwnwinesComponent, children: MYWINES_OWN_ROUTES}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
