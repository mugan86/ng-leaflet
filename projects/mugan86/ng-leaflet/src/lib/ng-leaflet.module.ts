import { NgModule } from '@angular/core';
import { MapBasicModule } from './components/map-basic/map-basic.module';
import { NgLeafletComponent } from './ng-leaflet.component';

@NgModule({
  declarations: [
    NgLeafletComponent
  ],
  imports: [
    MapBasicModule
  ],
  exports: [
    NgLeafletComponent,
    MapBasicModule
  ]
})
export class NgLeafletModule { }
