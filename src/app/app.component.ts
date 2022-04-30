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
    baseLayer: {
      map: tileLayers.baseLayers.osmHot.map,
      atribution: tileLayers.baseLayers.osmHot.atribution
    },
    overLayer: {
      map: tileLayers.overlayers.wayMarkedTrails.hiking,
      atribution: tileLayers.baseLayers.default.atribution
    }
  }  
}
