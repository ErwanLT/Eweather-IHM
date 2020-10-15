import {Component, Input, OnInit} from '@angular/core';
import {Forecast} from '../../forecast/forecast';
import {Map, Marker, icon, tileLayer, circle, polygon, latLng} from 'leaflet';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-currently',
  templateUrl: './currently.component.html',
  styleUrls: ['./currently.component.scss']
})
export class CurrentlyComponent implements OnInit {

  constructor() { }

  map: Map;

  layersControl = {
    baseLayers: {
      'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
    },
    overlays: {
      'Temperature': tileLayer('https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=' + atob(environment.appid)),
      'Nuages': tileLayer('https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=' + atob(environment.appid)),
      'Pluie': tileLayer('https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=' + atob(environment.appid)),
      'Vent': tileLayer('https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=' + atob(environment.appid))
    }
  };

  @Input() forecast: Forecast;

  @Input() options: any;

  ngOnInit(): void {
  }

  onMapReady(map: Map) {
    this.map = map;
    this.addSampleMarker();
  }

  private addSampleMarker() {
    const marker = new Marker([this.forecast.latitude, this.forecast.longitude])
      .setIcon(
        icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/img/marker-icon.png',
          shadowUrl: 'assets/img/marker-shadow.png'
        }));
    marker.addTo(this.map);
  }
}
