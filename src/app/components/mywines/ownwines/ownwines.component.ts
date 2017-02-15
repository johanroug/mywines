import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ownwines',
  templateUrl: './ownwines.component.html',
  styleUrls: ['./ownwines.component.scss']
})
export class OwnwinesComponent implements OnInit {
  public ownWinesList: Array<Object>;
  constructor() {
    this.ownWinesList = [
      {
        name: "my wine",
        country: "Denmark"
      }
    ]
  }

  ngOnInit() {
  }

}
