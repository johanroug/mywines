import { Component }          from '@angular/core';
import { DataService } from "../data/data.service";

@Component({
  selector: 'app-ownwines',
  templateUrl: './ownwines.component.html',
  styleUrls: ['./ownwines.component.scss']
})
export class OwnwinesComponent {
  public ownWinesList: Array<Object>;

  constructor(private _handleDataService: DataService) {
    this.ownWinesList = this._handleDataService.getOwnWineList();
  }
}
