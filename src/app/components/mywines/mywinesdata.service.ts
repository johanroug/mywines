import { Injectable } from '@angular/core';
import {Form} from "@angular/forms";
import {ICreateOwnWineItem} from "./models";

@Injectable()
export class MywinesDataService {
  public ownWines: Array<Object>;
  constructor() {
    this.ownWines = [
      {
        "name": "Otto",
        "country": "Finland"
      }
    ]
  }

  getOwnWineList(): Array<Object> {
    return this.ownWines;
  }

  setOwnWineList(data: ICreateOwnWineItem): void {
    this.ownWines.push({
      "name": data.value.Name,
      "country": data.value.Country
      });
  }



}
