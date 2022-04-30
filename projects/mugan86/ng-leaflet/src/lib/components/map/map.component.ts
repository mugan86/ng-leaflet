import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { tileLayer, Map, marker } from 'leaflet';

@Component({
  selector: 'alm-map-basic',
  templateUrl: './map.component.html',
  styles: [
  ]
})
export class MapComponent implements AfterViewInit {
  @Input() center: {lng: number, lat: number} = {
    lat: 51.5, lng: -0.09
  }
  @Input() markers: Array<{lng: number, lat: number}> = [
    {
      lat: 51.5, lng: -0.09
    },
    {
      lat: 52.5, lng: -0.19
    }
  ];
  @Input() size: {width: string, height: string }= { width: '600px', height: '600px'}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    const map = new Map('map').setView([35.6414,139.7803], 13);
    tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    this.markers.map((markerItem) => marker([markerItem.lat, markerItem.lng]).addTo(map).bindPopup("Londres marcador"));

    map.fitBounds([
      ...this.markers.map((point) => [point.lat, point.lng] as [number, number]),
    ]);
 
  }

}
