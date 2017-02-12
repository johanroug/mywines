import {Component, ViewEncapsulation} from "@angular/core";
import {MywineWineService} from "../wine-com/mywines-wine.service";

@Component({
  selector: "mywines-overview",
  styleUrls: ["./overview.component.scss"],
  templateUrl: "./overview.component.html"
})
export class MywinesOverviewComponent {
  public winelist: any;
  private wineCom;

  constructor(private _mywineWineService: MywineWineService) {
    /*
    this._mywineWineService.getData()
      .subscribe(
        (data) => {
          this.wineCom = data;
        }
      );
      */
    this.winelist = {
      "Status": {
        "Messages": [],
        "ReturnCode": 0
      },
      "Products": {
        "List": [
          {
            "Id": 159424,
            "Name": "Duckhorn Napa Valley Cabernet Sauvignon 2013",
            "Url": "http://www.wine.com/v6/Duckhorn-Napa-Valley-Cabernet-Sauvignon-2013/wine/159424/Detail.aspx",
            "Appellation": {
              "Id": 2398,
              "Name": "Napa Valley",
              "Url": "http://www.wine.com/v6/Napa-Valley/wine/list.aspx?N=7155+101+2398",
              "Region": {
                "Id": 101,
                "Name": "California",
                "Url": "http://www.wine.com/v6/California/wine/list.aspx?N=7155+101",
                "Area": null
              }
            },
            "Labels": [
              {
                "Id": "159424m",
                "Name": "thumbnail",
                "Url": "http://cache.wine.com/labels/159424m.jpg"
              }
            ],
            "Type": "Wine",
            "Varietal": {
              "Id": 139,
              "Name": "Cabernet Sauvignon",
              "Url": "http://www.wine.com/v6/Cabernet-Sauvignon/wine/list.aspx?N=7155+124+139",
              "WineType": {
                "Id": 124,
                "Name": "Red Wines",
                "Url": "http://www.wine.com/v6/Red-Wines/wine/list.aspx?N=7155+124"
              }
            },
            "Vineyard": {
              "Id": 8808,
              "Name": "Duckhorn Vineyards",
              "Url": "http://www.wine.com/v6/Duckhorn-Vineyards/learnabout.aspx?winery=19",
              "ImageUrl": "http://cache.wine.com/aboutwine/basics/images/winerypics/19.jpg",
              "GeoLocation": {
                "Latitude": -360,
                "Longitude": -360,
                "Url": "http://www.wine.com/v6/aboutwine/mapof.aspx?winery=19"
              }
            },
            "Vintage": "2013",
            "Community": {
              "Reviews": {
                "HighestScore": 0,
                "List": [],
                "Url": "http://www.wine.com/v6/Duckhorn-Napa-Valley-Cabernet-Sauvignon-2013/wine/159424/Detail.aspx?pageType=reviews"
              },
              "Url": "http://www.wine.com/v6/Duckhorn-Napa-Valley-Cabernet-Sauvignon-2013/wine/159424/Detail.aspx"
            },
            "Description": "",
            "GeoLocation": {
              "Latitude": -360,
              "Longitude": -360,
              "Url": "http://www.wine.com/v6/aboutwine/mapof.aspx?winery=19"
            },
            "PriceMax": 69.99,
            "PriceMin": 64.99,
            "PriceRetail": 72,
            "ProductAttributes": [
              {
                "Id": 0,
                "Name": "Has Large Label",
                "Url": "",
                "ImageUrl": ""
              },
              {
                "Id": 15419,
                "Name": "Great Bottles to Give",
                "Url": "http://www.wine.com/v6/Great-Bottles-to-Give/gift/list.aspx?N=7151+15419",
                "ImageUrl": "http://cache.wine.com/assets/glo_icon_gift_big.gif"
              }
            ],
            "Ratings": {
              "HighestScore": 93,
              "List": []
            },
            "Retail": null,
            "Vintages": {
              "List": []
            }
          },
          {
            "Id": 160512,
            "Name": "Silver Oak Alexander Valley Cabernet Sauvignon 2012",
            "Url": "http://www.wine.com/v6/Silver-Oak-Alexander-Valley-Cabernet-Sauvignon-2012/wine/160512/Detail.aspx",
            "Appellation": {
              "Id": 2371,
              "Name": "Sonoma County",
              "Url": "http://www.wine.com/v6/Sonoma-County/wine/list.aspx?N=7155+101+2371",
              "Region": {
                "Id": 101,
                "Name": "California",
                "Url": "http://www.wine.com/v6/California/wine/list.aspx?N=7155+101",
                "Area": null
              }
            },
            "Labels": [
              {
                "Id": "160512m",
                "Name": "thumbnail",
                "Url": "http://cache.wine.com/labels/160512m.jpg"
              }
            ],
            "Type": "Wine",
            "Varietal": {
              "Id": 139,
              "Name": "Cabernet Sauvignon",
              "Url": "http://www.wine.com/v6/Cabernet-Sauvignon/wine/list.aspx?N=7155+124+139",
              "WineType": {
                "Id": 124,
                "Name": "Red Wines",
                "Url": "http://www.wine.com/v6/Red-Wines/wine/list.aspx?N=7155+124"
              }
            },
            "Vineyard": {
              "Id": 999998522,
              "Name": "Silver Oak Alexander Valley",
              "Url": "http://www.wine.com/v6/Silver-Oak-Alexander-Valley/learnabout.aspx?winery=19143",
              "ImageUrl": "http://cache.wine.com/aboutwine/basics/images/winerypics/19143.jpg",
              "GeoLocation": {
                "Latitude": -360,
                "Longitude": -360,
                "Url": "http://www.wine.com/v6/aboutwine/mapof.aspx?winery=19143"
              }
            },
            "Vintage": "2012",
            "Community": {
              "Reviews": {
                "HighestScore": 0,
                "List": [],
                "Url": "http://www.wine.com/v6/Silver-Oak-Alexander-Valley-Cabernet-Sauvignon-2012/wine/160512/Detail.aspx?pageType=reviews"
              },
              "Url": "http://www.wine.com/v6/Silver-Oak-Alexander-Valley-Cabernet-Sauvignon-2012/wine/160512/Detail.aspx"
            },
            "Description": "",
            "GeoLocation": {
              "Latitude": -360,
              "Longitude": -360,
              "Url": "http://www.wine.com/v6/aboutwine/mapof.aspx?winery=19143"
            },
            "PriceMax": 79.99,
            "PriceMin": 69.99,
            "PriceRetail": 74.99,
            "ProductAttributes": [
              {
                "Id": 613,
                "Name": "Big &amp; Bold",
                "Url": "http://www.wine.com/v6/Big-andamp-Bold/wine/list.aspx?N=7155+613",
                "ImageUrl": ""
              },
              {
                "Id": 38,
                "Name": "Green Wines",
                "Url": "http://www.wine.com/v6/Green-Wines/wine/list.aspx?N=7155+38",
                "ImageUrl": "http://cache.wine.com/assets/glo_icon_organic_big.gif"
              },
              {
                "Id": 0,
                "Name": "Has Large Label",
                "Url": "",
                "ImageUrl": ""
              }
            ],
            "Ratings": {
              "HighestScore": 90,
              "List": []
            },
            "Retail": null,
            "Vintages": {
              "List": []
            }
          },
          {
            "Id": 158817,
            "Name": "Caymus Napa Valley Cabernet Sauvignon 2014",
            "Url": "http://www.wine.com/v6/Caymus-Napa-Valley-Cabernet-Sauvignon-2014/wine/158817/Detail.aspx",
            "Appellation": {
              "Id": 2398,
              "Name": "Napa Valley",
              "Url": "http://www.wine.com/v6/Napa-Valley/wine/list.aspx?N=7155+101+2398",
              "Region": {
                "Id": 101,
                "Name": "California",
                "Url": "http://www.wine.com/v6/California/wine/list.aspx?N=7155+101",
                "Area": null
              }
            },
            "Labels": [
              {
                "Id": "158817m",
                "Name": "thumbnail",
                "Url": "http://cache.wine.com/labels/158817m.jpg"
              }
            ],
            "Type": "Wine",
            "Varietal": {
              "Id": 139,
              "Name": "Cabernet Sauvignon",
              "Url": "http://www.wine.com/v6/Cabernet-Sauvignon/wine/list.aspx?N=7155+124+139",
              "WineType": {
                "Id": 124,
                "Name": "Red Wines",
                "Url": "http://www.wine.com/v6/Red-Wines/wine/list.aspx?N=7155+124"
              }
            },
            "Vineyard": {
              "Id": 8626,
              "Name": "Caymus",
              "Url": "http://www.wine.com/v6/Caymus/learnabout.aspx?winery=14",
              "ImageUrl": "http://cache.wine.com/aboutwine/basics/images/winerypics/14.jpg",
              "GeoLocation": {
                "Latitude": -360,
                "Longitude": -360,
                "Url": "http://www.wine.com/v6/aboutwine/mapof.aspx?winery=14"
              }
            },
            "Vintage": "2014",
            "Community": {
              "Reviews": {
                "HighestScore": 0,
                "List": [],
                "Url": "http://www.wine.com/v6/Caymus-Napa-Valley-Cabernet-Sauvignon-2014/wine/158817/Detail.aspx?pageType=reviews"
              },
              "Url": "http://www.wine.com/v6/Caymus-Napa-Valley-Cabernet-Sauvignon-2014/wine/158817/Detail.aspx"
            },
            "Description": "",
            "GeoLocation": {
              "Latitude": -360,
              "Longitude": -360,
              "Url": "http://www.wine.com/v6/aboutwine/mapof.aspx?winery=14"
            },
            "PriceMax": 79.99,
            "PriceMin": 69.99,
            "PriceRetail": 69.99,
            "ProductAttributes": [
              {
                "Id": 613,
                "Name": "Big &amp; Bold",
                "Url": "http://www.wine.com/v6/Big-andamp-Bold/wine/list.aspx?N=7155+613",
                "ImageUrl": ""
              },
              {
                "Id": 0,
                "Name": "Has Large Label",
                "Url": "",
                "ImageUrl": ""
              }
            ],
            "Ratings": {
              "HighestScore": 94,
              "List": []
            },
            "Retail": null,
            "Vintages": {
              "List": []
            }
          },
          {
            "Id": 154233,
            "Name": "Caymus Special Selection Cabernet Sauvignon 2013",
            "Url": "http://www.wine.com/v6/Caymus-Special-Selection-Cabernet-Sauvignon-2013/wine/154233/Detail.aspx",
            "Appellation": {
              "Id": 2398,
              "Name": "Napa Valley",
              "Url": "http://www.wine.com/v6/Napa-Valley/wine/list.aspx?N=7155+101+2398",
              "Region": {
                "Id": 101,
                "Name": "California",
                "Url": "http://www.wine.com/v6/California/wine/list.aspx?N=7155+101",
                "Area": "johan"
              }
            },
            "Labels": [
              {
                "Id": "154233m",
                "Name": "thumbnail",
                "Url": "http://cache.wine.com/labels/154233m.jpg"
              }
            ],
            "Type": "Wine",
            "Varietal": {
              "Id": 139,
              "Name": "Cabernet Sauvignon",
              "Url": "http://www.wine.com/v6/Cabernet-Sauvignon/wine/list.aspx?N=7155+124+139",
              "WineType": {
                "Id": 124,
                "Name": "Red Wines",
                "Url": "http://www.wine.com/v6/Red-Wines/wine/list.aspx?N=7155+124"
              }
            },
            "Vineyard": {
              "Id": 8626,
              "Name": "Caymus",
              "Url": "http://www.wine.com/v6/Caymus/learnabout.aspx?winery=14",
              "ImageUrl": "http://cache.wine.com/aboutwine/basics/images/winerypics/14.jpg",
              "GeoLocation": {
                "Latitude": -360,
                "Longitude": -360,
                "Url": "http://www.wine.com/v6/aboutwine/mapof.aspx?winery=14"
              }
            },
            "Vintage": "2013",
            "Community": {
              "Reviews": {
                "HighestScore": 0,
                "List": [],
                "Url": "http://www.wine.com/v6/Caymus-Special-Selection-Cabernet-Sauvignon-2013/wine/154233/Detail.aspx?pageType=reviews"
              },
              "Url": "http://www.wine.com/v6/Caymus-Special-Selection-Cabernet-Sauvignon-2013/wine/154233/Detail.aspx"
            },
            "Description": "",
            "GeoLocation": {
              "Latitude": -360,
              "Longitude": -360,
              "Url": "http://www.wine.com/v6/aboutwine/mapof.aspx?winery=14"
            },
            "PriceMax": 159.99,
            "PriceMin": 159.99,
            "PriceRetail": 159.99,
            "ProductAttributes": [
              {
                "Id": 15419,
                "Name": "Great Bottles to Give",
                "Url": "http://www.wine.com/v6/Great-Bottles-to-Give/gift/list.aspx?N=7151+15419",
                "ImageUrl": "http://cache.wine.com/assets/glo_icon_gift_big.gif"
              },
              {
                "Id": 36,
                "Name": "Collectible Wines",
                "Url": "http://www.wine.com/v6/Collectible-Wines/wine/list.aspx?N=7155+36",
                "ImageUrl": "http://cache.wine.com/assets/glo_icon_collectable_big.gif"
              },
              {
                "Id": 611,
                "Name": "Smooth &amp; Supple",
                "Url": "http://www.wine.com/v6/Smooth-andamp-Supple/wine/list.aspx?N=7155+611",
                "ImageUrl": ""
              }
            ],
            "Ratings": {
              "HighestScore": 95,
              "List": []
            },
            "Retail": null,
            "Vintages": {
              "List": []
            }
          }
        ],
        "Offset": 10,
        "Total": 67208,
        "Url": ""
      }
    }
  }
}
