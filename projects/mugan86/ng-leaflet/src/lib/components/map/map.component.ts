import { AfterViewInit, Component, Input } from '@angular/core';
import { IConfigMap } from '../../models/config-map';
import { Controls } from '../../services/controls.service';
import { Markers } from '../../services/markers.service';
import { LeafletMap as Map } from '../../services/ng-leaflet-map.service';

@Component({
  selector: 'alm-map-basic',
  templateUrl: './map.component.html',
  styles: [
  ]
})
export class MapComponent implements AfterViewInit {
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
  private map!: Map;

  ngAfterViewInit(): void {
    this.map = new Map(this.config || undefined);
    Markers.add(this.markers, this.map.get())
    this.map.fitBounds(this.markers);
    this.config!!.scale && this.setControls();
  }

  setControls() {
    Controls.addScale(this.map.get());
    Controls.addBaseOverLayers(this.map.get())
  }

}
