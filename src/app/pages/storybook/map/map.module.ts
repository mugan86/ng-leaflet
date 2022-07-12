import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { IConfigMap, NgLeafletModule, tileLayers } from '@mugan86/ng-leaflet';

/*const config: IConfigMap = {
  fullscreen: true,
  center: [40.4378698,-3.8196188],
  zoom: {
    position: 'topright'
  },
  watermark: {
    position: 'topleft'
  },
  defaultLayer: {
    map: 'https://tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=47455e4b0807408c87ead5d6f7a8d1c8',
    atribution: tileLayers.baseLayers.default.atribution
  },
  /*layers: {
    baseLayers: [{
      label: 'Carto - Positron',
      map: tileLayers.baseLayers.cartoDb.map.positron,
      atribution: tileLayers.baseLayers.cartoDb.atribution,
      default: true
    },
    {
      label: 'Cyclo OSM',
      map: tileLayers.baseLayers.cycloOsm.map,
      atribution: tileLayers.baseLayers.cycloOsm.atribution
    }]
  },
  drawRoute: {
    active: true,
    showControl: true
  }
}*/
@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    NgLeafletModule.forRoot()
  ]
})
export class MapModule { }
