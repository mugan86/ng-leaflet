import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { IMarker, IConfigMap } from './../../models';
import { Controls } from '../../services/controls';
import { Markers } from './../../services/markers';
import { LeafletMap as Map } from './../../services/ng-leaflet-map.service';
import { Map as MapObject } from 'leaflet';
import { ISizeMap } from '../../models/config-map';
@Component({
  selector: 'ng-leaflet-map',
  templateUrl: './map.component.html',
  styles: [
  ]
})
export class MapComponent implements AfterViewInit {
  /**
   * Markers
   */
  @Input() markers!: Array<IMarker>;
  /**
   * Assign map ID that need is unique and not duplicate
   * 
   * @required
   */
  @Input() mapId = 'map';
  /**
   * Button contents
   *
   * @required
   */
  @Input() randomMarkers: boolean = false;
  /**
   * Specify use Map size to working map
   *
   * @required
   */
  @Input() size!: ISizeMap;
  /**
   * Use map differents configurations to custom
   */
  @Input() config?: IConfigMap;
  /**
    Use the loading state to indicate that the data Avatar needs is still loading.
    */
  @Output() setUpMap: EventEmitter<MapObject> = new EventEmitter<MapObject>();
  private map!: Map;

  ngOnInit() {
    this.size = (this.size) || {
      width: '100%',
      height: '500px'
    }
  }

  ngAfterViewInit(): void {
    this.map = new Map(this.config || undefined, this.mapId || undefined);
    this.markers && (this.markers.length) && Markers.add(this.map.get(), this.markers);
    this.randomMarkers && Markers.add(this.map.get(), [], this.randomMarkers);
    this.markers && this.markers.length && this.config?.fitBounds && this.map.fitBounds(this.markers);
    this.config!! && this.setControls();
    this.setUpMap.emit(this.map.get());
  }

  setControls() {
    this.config!!.scale && Controls.addScale(this.map.get(), this.config?.scale);
    this.config!!.layers && Controls.addBaseOverLayers(this.map.get(), this.config!!.layers);
    this.config!!.zoom && Controls.changeZoomConfig(this.map.get(), this.config?.zoom);
    this.config!!.fullscreen && Controls.activeFullScreen(this.map.get());
    this.config!!.watermark && Controls.activeWatermark(this.map.get(), this.config!!.watermark);
  }

}
