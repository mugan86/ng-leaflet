import { Component, Input } from '@angular/core';
import { IConfigMap, IMarker } from '@mugan86/ng-leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @Input() markers: Array<IMarker> = [ ];
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
    }
  };
}
