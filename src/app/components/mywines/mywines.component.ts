import {Component} from "@angular/core";

@Component({
  selector: "mywines",
  template: `
    <div class="row">
      <div class="col-xs-12 col-md-6">        
        <mywines-overview></mywines-overview>
      </div>
      <div class="col-xs-12 col-md-6">
        <mywines-details></mywines-details>
      </div>
    </div>
  `
})
export class MywinesComponent {

}
