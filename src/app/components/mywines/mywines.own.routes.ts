import {Routes} from "@angular/router";
import {MywinesDetailsComponent} from "./details/details.component";
import {CreateItemComponent} from "./create-item/create-item.component";

export const MYWINES_OWN_ROUTES: Routes = [
  {path: "", component: CreateItemComponent},
  {path: ":id", component: MywinesDetailsComponent}
];
