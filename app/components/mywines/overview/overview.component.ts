import {Component} from "@angular/core";

@Component({
  selector: "mywines-overview",
  template: `
    <ul>
      <li *ngFor="let item of winelist">
         {{item.name}}
      </li>
    </ul>    
  `
})
export class MywinesOverviewComponent {
  public winelist: any;

  constructor() {
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
