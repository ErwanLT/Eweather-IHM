import {Component, Input, OnInit} from '@angular/core';
import {Forecast} from '../../forecast/forecast';

@Component({
  selector: 'app-currently',
  templateUrl: './currently.component.html',
  styleUrls: ['./currently.component.scss']
})
export class CurrentlyComponent implements OnInit {

  constructor() { }

  @Input() forecast: Forecast;

  ngOnInit(): void {
  }
}
