import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { IConfigMap, NgLeafletModule, tileLayers } from '@mugan86/ng-leaflet';

const config: IConfigMap = {
  fullscreen: true,
  center: [40.4378698,-3.8196188],
  zoom: {
    position: 'topright'
  },
  watermark: {
    show: true,
    position: 'topleft'
  },
  layers: {
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
}
@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    NgLeafletModule.forRoot(config, {
      width: '100%',
      height: '600px'
    })
  ]
})
export class MapModule { }
