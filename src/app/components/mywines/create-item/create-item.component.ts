import { Component }          from '@angular/core';
import { ICreateOwnWineItem } from "../models";
import { MywinesDataService } from "../data/mywinesdata.service";

@Component({
  selector: 'mywines-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent {
  constructor(private _handleDataService: MywinesDataService) {}

  onSubmit(data: ICreateOwnWineItem) {
    this._handleDataService.setOwnWineList(data);
  }
}
