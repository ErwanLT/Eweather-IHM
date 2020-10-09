import {Currently} from './currently';

export class Forecast {

  public latitude: number;
  public longitude: number;
  public timezone: string;
  public location: string;
  public currently: Currently;

  constructor();

  constructor(obj?: any) {
    if (obj) {
      this.latitude = obj.latitude || 0;
      this.longitude = obj.longitude || 0;
      this.timezone = obj.timezone || '';
      this.location = obj.location || '';
      this.currently = obj.currently;
    } else {
      this.latitude = 0;
      this.longitude = 0;
      this.timezone = '';
      this.location = '';
      this.currently = new Currently();
    }

  }

}
