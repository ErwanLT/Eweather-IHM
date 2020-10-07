import { Component } from '@angular/core';

import { LocationForm} from './form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  model = new LocationForm('');

  submitted = false;

  onSubmit(f) {
    console.log(f);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
