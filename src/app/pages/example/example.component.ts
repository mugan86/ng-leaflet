import { Component } from '@angular/core';
import { IConfigMap, IMarker } from '@mugan86/ng-leaflet';
import { LatLngBounds, rectangle } from 'leaflet';
import { appModule } from 'src/app/configurations';
import navigation from './../../../assets/menu.json';
import { Map } from 'leaflet';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  title = 'angular-leaflet';
  option = 0;
  map!: Map;
  items = Array(50).fill({
    item: "banana"
  });
  menusItems = navigation.menus;
  snippet1 = appModule;


  marker = [{ 'lat': 43.1824528, 'lng': -2.3878554 }]
  randomMarkers = true;


  configMap: IConfigMap = {
    fullscreen: true,
    zoom: {
      // position: 'bottomleft',       // 'topright', 'topleft', 'bottomleft', 'bottomright'
      default: 18                  // Values between 4 and 20
    },
    watermark: {
      // show: true
      img: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-128.png',
      // border: true,
      //borderColor: 'red' // Use <color-name> / rgb / rgba / hexadecimal / hsl / hsla
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

  getRandomInRange = (from: number, to: number, fixed = 3) => {
    return +(Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
  };

  selectOption(id: number) {
    this.option = id;
  }

  setMap($event: Map) {
    this.map = $event;
    const bounds = new LatLngBounds([
      [43.2, -2.273474],
      [43.1736979, -2.4173475],
    ]);
    // Crear un rectángulo naranja a partir de los límites especificados
    const rectangleOne = rectangle(bounds, {
      color: "#ff7800",
      weight: 1,
      stroke: true,
    }).addTo(this.map);

    // Hacemos zoom y centramos al área que que queremos movernos
    // Esto lo usamos si dibujamos un rectángulo, si no, usamos la ubicación inicial
    // al crear el mapa
    // Al estar con un rectángulo,
    // vamos a coger la zona que ocupa haciendo un rectangulo imaginario donde obtenemos
    // las coordenadas de arriba-izquierda, arriba-derecha, abajo-izquierda y abajo-derecha
    // Con coger por ejemplo Norte-Este y Sur-Oeste, ya acota el rectángulo
    this.map.fitBounds([
      [
        rectangleOne.getBounds().getNorthEast().lat,
        rectangleOne.getBounds().getNorthEast().lng,
      ],
      [
        rectangleOne.getBounds().getSouthWest().lat,
        rectangleOne.getBounds().getSouthWest().lng,
      ],
    ]);
  }

}
