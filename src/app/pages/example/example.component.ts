import { Component, OnInit } from '@angular/core';
import { IConfigMap } from '@mugan86/ng-leaflet';
import { appModule } from 'src/app/configurations';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  title = 'angular-leaflet';
  option = 0;
  items = Array(50).fill({
    item: "banana"
  });
  snippet1 = appModule;
  configMap: IConfigMap = {
    center: [27.9881, 86.9253],
    zoom: {
      default: 15
    }
  }

  /*configMap: IConfigMap = {
    fullscreen: true,
    
    watermark: {
      position: 'bottomleft',
      size: '50px'
    },
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
    // If add zoom config (if add one property info) default zoom control remove
    zoom: {
      position: 'topright',
      zoomInTitle: 'Acercar',
      zoomOutTitle: 'Alejar'
    }
  }*/
  constructor() { }

  ngOnInit(): void {
  }

  selectOption(id: number) {
    this.option = id;
  }

}
