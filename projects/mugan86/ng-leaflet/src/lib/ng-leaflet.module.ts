import { NgModule } from '@angular/core';
import { MapBasicModule } from './components/map/map.module';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    MapBasicModule
  ],
  exports: [
    MapBasicModule,
    SearchComponent
  ]
})
export class NgLeafletModule { }
