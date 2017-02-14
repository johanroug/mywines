import {Routes, RouterModule} from "@angular/router";
import {MywinesComponent} from "./components/mywines/mywines.component";
import {MYWINES_ROUTES} from "./components/mywines/mywines.routes";

const APP_ROUTES: Routes = [
  {path: "", redirectTo: "/wines", pathMatch: "full"},
  {path: "wines", component: MywinesComponent, children: MYWINES_ROUTES}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
