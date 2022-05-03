import { Component } from '@angular/core';
import { IConfigMap, tileLayers } from '@mugan86/ng-leaflet';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-leaflet';
  markers = [
    {
      lat: 51.5, lng: -0.09
    },
    {
      lat: 52.5, lng: -0.19
    }
  ];
  // markers = [];
  configMap: IConfigMap = {
    fullscreen: true,
    layers: {
      baseLayers: [
        {
          label: 'Default',
          map: tileLayers.baseLayers.default.map,
          atribution: tileLayers.baseLayers.default.atribution,
          default: true
        },
        {
          label: 'CycloOSM',
          map: tileLayers.baseLayers.cycloOsm.map,
          atribution: tileLayers.baseLayers.cycloOsm.atribution
        },
        {
          label: 'OSMHot',
          map: tileLayers.baseLayers.osmHot.map,
          atribution: tileLayers.baseLayers.osmHot.atribution
        },
        {
          label: 'OSMManik',
          map: tileLayers.baseLayers.osmManik.map,
          atribution: tileLayers.baseLayers.osmManik.atribution
        }],
      overLayers: [{
        label: 'Trail / Hiking',
        map: tileLayers.overlayers.wayMarkedTrails.hiking,
        select: true
      },
      {
        label: 'Open Railway',
        map: tileLayers.overlayers.openRailway,
        select: false
      }]
    },
    watermark: {
      position: 'bottomleft',
      size: '50px'
    }
    // If add zoom config (if add one property info) default zoom control remove
    /*zoom: {
      zoomInTitle: 'Acercar',
      zoomOutTitle: 'Alejar'
    }*/
  }
}
