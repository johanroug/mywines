import {Component}      from "@angular/core";
import {WineComService} from "../wine-com/wineCom.service";
import {IWinesCom}      from "../models";

@Component({
  selector: "mywines-overview",
  styleUrls: ["./overview.component.scss"],
  templateUrl: "./overview.component.html"
})
export class OverviewComponent {
  public wineCom: Object;
  constructor(private _mywineWineService: WineComService) {

    this._mywineWineService.getData()
      .subscribe(
        (data: IWinesCom) => {
          this.wineCom = data.Products.List;
        }
      );
  }
}
