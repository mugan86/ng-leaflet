import { Component, OnInit } from '@angular/core';
import { IConfigMap, tileLayers } from '@mugan86/ng-leaflet';
import { IMarker } from 'dist/mugan86/ng-leaflet/lib/models/marker';
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


  marker = [{ 'lat': 43.1824528, 'lng': -2.3878554 }]
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
    watermark: {
      // img: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-128.png',
      border: true,
      size: '100px',
      borderColor: 'red' // Use <color-name> / rgb / rgba / hexadecimal / hsl / hsla
    },
    fitBounds: true
  }

  markers: Array<IMarker> = [
    {
      position: {
        "lat": 43.17757110078426,
        "lng": -2.3661233885984085
      },
      popup: {
        content: '<p>Hello</p>'
      }
    },
    {
      position: {
        "lat": 43.177781697765305,
        "lng": -2.367583962060063
      }
    },
    {
      position: {
        "lat": 43.1765773404203,
        "lng": -2.409942167562859
      }
    }
  ];
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
