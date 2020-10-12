import {Component, Input, OnInit} from '@angular/core';
import {Forecast} from '../../forecast/forecast';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {

  @Input()forecast: Forecast;

  constructor() { }

  ngOnInit(): void {
  }

}
