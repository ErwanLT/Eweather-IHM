import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currently',
  templateUrl: './currently.component.html',
  styleUrls: ['./currently.component.scss']
})
export class CurrentlyComponent implements OnInit {

  appareilName: string = 'machine a laver';

  constructor() { }

  ngOnInit(): void {
  }

}
