import {Routes} from "@angular/router";
import {CreateItemComponent} from "./create-item/create-item.component";
import {DetailsComponent} from "./details/details.component";

export const OWN_ROUTES: Routes = [
  {path: "", component: CreateItemComponent},
  {path: ":id", component: DetailsComponent}
];
