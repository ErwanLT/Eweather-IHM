import {Currently} from './currently';
import {Hourly} from './hourly';

export class Forecast {

  public latitude: number;
  public longitude: number;
  public timezone: string;
  public location: string;
  public currently: Currently;
  public hourly: Hourly;

  constructor();

  constructor(obj?: any) {
    if (obj) {
      this.latitude = obj.latitude || 0;
      this.longitude = obj.longitude || 0;
      this.timezone = obj.timezone || '';
      this.location = obj.location || '';
      this.currently = obj.currently;
      this.currently = obj.hourly;
    } else {
      this.latitude = 0;
      this.longitude = 0;
      this.timezone = '';
      this.location = '';
      this.currently = new Currently();
      this.hourly = new Hourly();
    }

  }

}
