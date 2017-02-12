import {Component} from "@angular/core";
import {MywineWineService} from "../wine-com/mywines-wine.service";

@Component({
  selector: "mywines-overview",
  styleUrls: ["./overview.component.scss"],
  templateUrl: "./overview.component.html"
})
export class MywinesOverviewComponent {
  public wineCom;

  constructor(private _mywineWineService: MywineWineService) {

    this._mywineWineService.getData()
      .subscribe(
        (data) => {
          this.wineCom = data.Products.List;
        }
      );
  }

  details(item) {
    console.log(item);
  }
}
