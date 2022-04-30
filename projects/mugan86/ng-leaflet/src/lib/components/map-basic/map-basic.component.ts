import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { tileLayer, Map, marker } from 'leaflet';

@Component({
  selector: 'mlm-map-basic',
  templateUrl: './map-basic.component.html',
  styles: [
  ]
})
export class MapBasicComponent implements AfterViewInit {
  @Input() markers: [][] = [];
  @Input() size: {width: string, height: string }= { width: '600px', height: '600px'}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    const map = new Map('map').setView([35.6414,139.7803], 13);
    tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const markerItem = marker([51.5, -0.09]).addTo(map).bindPopup("Londres marcador");

    this.markers.map((marker) => console.log(marker))

    map.fitBounds([
      [markerItem.getLatLng().lat, markerItem.getLatLng().lng]
    ]);
 
  }

}
