import { Component, OnInit } from '@angular/core';
import { IConfigMap, tileLayers } from '@mugan86/ng-leaflet';
import { appModule } from 'src/app/configurations';
import navigation from './../../../assets/menu.json';

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
  menusItems = navigation.menus;
  snippet1 = appModule;
  
  
  marker = [{'lat': 43.1824528, 'lng': -2.3878554}]
  randomMarkers = true;


  configMap: IConfigMap = {
    fullscreen: true,
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
          atribution: tileLayers.baseLayers.cycloOsm.atribution,
          default: true // <=== To show with this selection
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
        select: true
      }]
    },
  }
  constructor() { }

  ngOnInit(): void {
  }

  getRandomInRange = (from: number, to: number, fixed = 3) => {
    return +(Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
  };

  selectOption(id: number) {
    this.option = id;
  }

}
