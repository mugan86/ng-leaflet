import { Component } from '@angular/core';
import { IConfigMap, tileLayers } from '@mugan86/ng-leaflet';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-leaflet';



  configMap: IConfigMap = {
    layers: {
      baseLayers: [
        {
          label: 'Default',
          map: tileLayers.baseLayers.default.map,
          atribution: tileLayers.baseLayers.default.atribution
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
        map: tileLayers.overlayers.wayMarkedTrails.hiking
      },
      {
        label: 'Open Railway',
        map: tileLayers.overlayers.openRailway
      }]
    }

  }
}
