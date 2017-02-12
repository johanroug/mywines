import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map"

@Injectable()
export class MywineWineService {
  constructor(private _http: Http) {}
  getData() {
    return this._http.get("http://services.wine.com/api/beta2/service.svc/json/catalog?apikey=01cdca68e88008a1f454a7aaa1fc2c07&size=10&offset=10&filter=categories(7155+124)term=mondavi+cab")
      .map(res => res.json());
  }
}
