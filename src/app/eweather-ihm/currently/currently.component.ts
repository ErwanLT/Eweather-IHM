import {Component, Input, OnInit} from '@angular/core';
import {Forecast} from '../../forecast/forecast';
import {L} from '@angular/cdk/keycodes';
import {latLng, tileLayer} from 'leaflet';

@Component({
  selector: 'app-currently',
  templateUrl: './currently.component.html',
  styleUrls: ['./currently.component.scss']
})
export class CurrentlyComponent implements OnInit {

  constructor() { }

  @Input() forecast: Forecast;

  @Input() options: any;

  ngOnInit(): void {
  }

}
