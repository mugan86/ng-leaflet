import { NgModule } from '@angular/core';
import { MapBasicModule } from './components/map/map.module';

@NgModule({
  declarations: [
  ],
  imports: [
    MapBasicModule
  ],
  exports: [
    MapBasicModule
  ]
})
export class NgLeafletModule { }
