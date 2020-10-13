import {Component, OnInit} from '@angular/core';
import {LocationForm} from './form/form';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Forecast} from './forecast/forecast';
import {circle, latLng, polygon, tileLayer} from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private httpClient: HttpClient) {
  }


  model = new LocationForm('');

  display = false;

  private url = 'http://localhost:8080/eweather/forecast?location=';

  forecast = new Forecast();

  options = {};

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const url = 'http://localhost:8080/eweather/forecastLocation';

        const optionRequete = {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
          }),
          params: new HttpParams()
            .set('latitude', position.coords.latitude.toString())
            .set('longitude', position.coords.longitude.toString())
        };

        this.httpClient.get<Forecast>(url, optionRequete).subscribe((response) => {
          this.forecast = response;
          this.display = true;

          this.options = {
            layers: [
              tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
              })
            ],
            zoom: 7,
            center: latLng(this.forecast.latitude, this.forecast.longitude)
          };
        });
      });
    }
  }

  onSubmit(f) {
    console.log(this.url + f);

    const optionRequete = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      }),
      params: new HttpParams()
        .set('location', f)
    };

    this.httpClient.get<Forecast>(this.url, optionRequete).subscribe((response) => {
      this.forecast = response;
      this.model.location = '';
      this.display = true;

      this.options = {
        layers: [
          tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
          })
        ],
        zoom: 7,
        center: latLng(this.forecast.latitude, this.forecast.longitude)
      };
    });
  }
}
