export interface ICreateOwnWineItem {
  value: {
    Name: string;
    Country: string;
  }
}
export interface IWinesCom {
  Products: {
    List: {
      Id: number;
      Name: string;
      Url: string;
      Appellation: {
        Id: number;
        Name: string;
        Url: string;
        Region: {
          Id: number;
          Name: string;
          Url: string;
          Area: null;
        }
      };
      Labels: [
        {
          Id: string;
          Name: string;
          Url: string;
        }
      ];
      Type: string;
      Varietal: {
        Id: number;
        Name: string;
        Url: string;
        WineType: {
          Id: number;
          Name: string;
          Url: string;
        }
      };
      Vineyard: {
        Id: number;
        Name: string;
        Url: string;
        ImageUrl: string;
        GeoLocation: {
          Latitude: number;
          Longitude: number;
          Url: string;
        }
      };
      Vintage: string;
      Community: {
        Reviews: {
          HighestScore: number;
          List: any[];
          Url: string;
        };
        Url: string;
      };
      Description: string;
      GeoLocation: {
        Latitude: number;
        Longitude: number;
        Url: string;
      };
      PriceMax: number;
      PriceMin: number;
      PriceRetail: number;
      ProductAttributes: [
        {
          Id: number;
          Name: string;
          Url: string;
          ImageUrl: string;
        }
        ];
      Ratings: {
        HighestScore: number;
        List: any[];
      };
      Retail: null;
      Vintages: {
        List: any[];
      }
    }
  }
}
