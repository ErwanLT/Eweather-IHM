import {Component} from '@angular/core';
import {LocationForm} from './form/form';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Forecast} from './forecast/forecast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private httpClient: HttpClient) {
  }

  model = new LocationForm('');

  display = false;

  private url = 'http://localhost:8080/eweather/forecast?location=';

  forecast = new Forecast();

  onSubmit(f) {
    console.log(this.url + f);

    const optionRequete = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*'
      }),
      params: new HttpParams()
        .set('location', f)
    };

    this.httpClient.get<Forecast>(this.url, optionRequete).subscribe((response) => {
      this.forecast = response;
      this.display = true;
    });
  }
}
