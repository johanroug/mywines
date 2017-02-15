import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute}               from "@angular/router";
import {Subscription}                 from "rxjs/Rx";

import {IWinesCom} from "../models";
import {WineComService} from "../wine-com/wineCom.service";

@Component({
  selector: 'mywines-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class MywinesDetailsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private wineIndex: number;
  public selectedWine: IWinesCom;

  constructor(private route: ActivatedRoute, private _mywineWineService: WineComService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.wineIndex = params["id"];
        this._mywineWineService.getData()
          .subscribe(
            (data: IWinesCom) => {
              this.selectedWine = data.Products.List[this.wineIndex];
            }
          );
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
