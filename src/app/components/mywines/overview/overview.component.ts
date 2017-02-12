import {Component} from "@angular/core";
import {MywineWineService} from "../wine-com/mywines-wine.service";
import {IWinesCom} from "../models";

@Component({
  selector: "mywines-overview",
  styleUrls: ["./overview.component.scss"],
  templateUrl: "./overview.component.html"
})
export class MywinesOverviewComponent {
  public wineCom: Object;
  constructor(private _mywineWineService: MywineWineService) {

    this._mywineWineService.getData()
      .subscribe(
        (data: IWinesCom) => {
          this.wineCom = data.Products.List;
        }
      );
  }

  details(item) {
    console.log(item);
  }
}
