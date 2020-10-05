import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EweatherIhmComponent } from './eweather-ihm/eweather-ihm.component';
import { CurrentlyComponent } from './eweather-ihm/currently/currently.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    EweatherIhmComponent,
    CurrentlyComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
