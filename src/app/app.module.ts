import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import { AppComponent } from './app.component';

import * as exporting from 'highcharts/modules/exporting.src';

export function highchartsModules() {
  // apply Highcharts Modules to this array
  // return [];
  return [exporting];
}

@NgModule({
  imports:      [ BrowserModule, FormsModule, ChartModule ],
  declarations: [ AppComponent ],
    providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules } // add as factory to your providers
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
