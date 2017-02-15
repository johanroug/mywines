import { Component } from '@angular/core';
import {MywinesDataService} from "../mywinesdata.service";

@Component({
  selector: 'app-ownwines',
  templateUrl: './ownwines.component.html',
  styleUrls: ['./ownwines.component.scss']
})
export class OwnwinesComponent {
  public ownWinesList: Array<Object>;

  constructor(private _handleDataService: MywinesDataService) {
    this.ownWinesList = this._handleDataService.getOwnWineList();
  }
}
