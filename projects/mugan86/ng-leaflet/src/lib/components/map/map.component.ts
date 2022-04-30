import { AfterViewInit, Component, Input } from '@angular/core';
import { IConfigMap } from '../../models/config-map';
import { NgLeafletMap } from '../../services/ng-leaflet-map.service';

@Component({
  selector: 'alm-map-basic',
  templateUrl: './map.component.html',
  styles: [
  ]
})
export class MapComponent implements AfterViewInit {
  @Input() center: {lng: number, lat: number}  = {
    lat: 51.5, lng: -0.09
  }
  @Input() markers: Array<{lng: number, lat: number} > = [
    {
      lat: 51.5, lng: -0.09
    },
    {
      lat: 52.5, lng: -0.19
    }
  ];
  @Input() size: {width: string, height: string }= { width: '600px', height: '600px'}
  @Input() config?: IConfigMap;

  ngAfterViewInit(): void {
    const leafletMap = new NgLeafletMap(this.config);
    leafletMap.addMarkers(this.markers); 
  }

}
