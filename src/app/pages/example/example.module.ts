import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './example.component';
import { NgLeafletModule } from '@mugan86/ng-leaflet';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    NgLeafletModule
  ]
})
export class ExampleModule { }
