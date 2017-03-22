import { Component }          from '@angular/core';
import { ICreateOwnWineItem } from "../models";
import { DataService } from "../data/data.service";

@Component({
  selector: 'mywines-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent {
  constructor(private _handleDataService: DataService) {}

  onSubmit(data: ICreateOwnWineItem) {
    this._handleDataService.setOwnWineList(data);
  }
}
