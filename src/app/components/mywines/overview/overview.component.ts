import {Component} from "@angular/core";
import {MywineWineService} from "../wine-com/mywines-wine.service";

@Component({
  selector: "mywines-overview",
  template: `    
    <ul>
      <li *ngFor="let item of winelist">
         {{item.name}}         
      </li>
    </ul>    
    
    <pre>{{wineCom | json}}</pre>
  `
})
export class MywinesOverviewComponent {
  public winelist: any;
  public wineCom;

  constructor(private _mywineWineService: MywineWineService) {
    this._mywineWineService.getData()
      .subscribe(
        (data) => {
          this.wineCom = data;
        }
      );
    this.winelist = [
      {
        name: "johan2",
        type: "flaske"
      },
      {
        name: "marie",
        type: "baby"
      }
    ]
  }
}
