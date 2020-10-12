import {Component, Input, OnInit} from '@angular/core';
import {Forecast} from '../../forecast/forecast';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.scss']
})
export class HourlyComponent implements OnInit {

  constructor() { }

  @Input() forecast: Forecast;

  ngOnInit(): void {
  }

}
