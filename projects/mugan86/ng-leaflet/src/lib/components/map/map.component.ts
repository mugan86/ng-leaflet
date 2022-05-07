import { AfterViewInit, Component, Input } from '@angular/core';
import { IConfigMap } from '../../models/config-map';
import { Controls } from '../../services/controls';
import { Markers } from '../../services/markers';
import { LeafletMap as Map } from '../../services/ng-leaflet-map.service';

@Component({
  selector: 'alm-map',
  templateUrl: './map.component.html',
  styles: [
  ]
})
export class MapComponent implements AfterViewInit {
  @Input() markers: Array<{ lng: number, lat: number }> = [  ];
  @Input() randomMarkers: boolean = false;
  @Input() size: { width: string, height: string } = { width: '100%', height: '600px' }
  @Input() config?: IConfigMap;
  private map!: Map;

  ngAfterViewInit(): void {
    this.map = new Map(this.config || undefined);    
    (this.markers.length || this.randomMarkers) && Markers.add(this.map.get(), this.markers, this.randomMarkers);
    this.markers.length && this.config?.fitBounds && this.map.fitBounds(this.markers);
    this.config!! && this.setControls();
  }

  setControls() {
    this.config!!.scale && Controls.addScale(this.map.get());
    this.config!!.layers && Controls.addBaseOverLayers(this.map.get(), this.config!!.layers);
    this.config!!.zoom && Controls.changeZoomConfig(this.map.get(), this.config?.zoom);
    this.config!!.fullscreen && Controls.activeFullScreen(this.map.get());
    this.config!!.watermark && Controls.activeWatermark(this.map.get(), this.config!!.watermark);
  }

}
