import { Component, OnInit } from '@angular/core';
import {MywinesDataService} from "../mywinesdata.service";
import {Form} from "@angular/forms";
import {ICreateOwnWineItem} from "../models";

@Component({
  selector: 'mywines-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {
  constructor(private _handleDataService: MywinesDataService) {}

  onSubmit(data: ICreateOwnWineItem) {
    this._handleDataService.setOwnWineList(data);
  }

  ngOnInit() {
  }

}
