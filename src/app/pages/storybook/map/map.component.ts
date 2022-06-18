import { Component, Input } from '@angular/core';
import { IConfigMap, IMarker } from '@mugan86/ng-leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  @Input() markers: Array<IMarker> = [{
    position: {
      lat: 43.17774378506745,
      lng: -2.4150770902633667
    }
  },
  {
    position: {
      lat: 43.177548188824325,
      lng: -2.4145513772964478
    }
  },
  {
    position: {
      lat: 43.177274353031386,
      lng: -2.4141544103622437
    }
  }];
  @Input() randomMarkers: boolean = false;
  @Input() size: { width: string, height: string } = { width: '100%', height: '600px' }
  @Input() config?: IConfigMap = {
    fullscreen: true,
    ourLocation: {
      active: true,
      zoom: 5
    },
    zoom: {
      default: 15
    },
    drawRoute: true
  };
}
