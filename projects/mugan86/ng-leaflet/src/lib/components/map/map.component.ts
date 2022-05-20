import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { IMarker, IConfigMap } from './../../models';
import { Controls } from '../../services/controls';
import { Markers } from './../../services/markers';
import { LeafletMap as Map } from './../../services/ng-leaflet-map.service';
import { Map as MapObject } from 'leaflet';
import { ISizeMap } from '../../models/config-map';
import { DefaultConfig } from '../../services';
@Component({
  selector: 'ng-leaflet-map',
  templateUrl: './map.component.html',
  styles: [
  ]
})
export class MapComponent implements AfterViewInit {
  /**
   * Assign map ID that need is unique and not duplicate
   * 
   * @required
   */
  @Input() mapId = 'map';
  /**
   * Markers
   */
  @Input() markers!: Array<IMarker>;
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

  constructor(private defaultConfig: DefaultConfig) { }

  ngOnInit() {
    // Check if size config exist and if not exist, take default 100% w - 500px h
    if (this.size && this.defaultConfig.get().size) {
      console.warn('Use set size');
    }
    if (!this.size && !this.defaultConfig.get().size) {
      this.size = {
        width: '100%',
        height: '500px'
      };
      return;
    }
    // Check if size config exist and if not exist, take default 100% w - 500px h
    if (!this.size && this.defaultConfig.get().size) {
      console.warn('Use default global size');
      this.size = this.defaultConfig.get().size;
    }
  }

  setConfiguration() {
    if (!this.config && this.defaultConfig.get().config) {
      console.warn('Use default config');
      this.config = this.defaultConfig.get().config;
      return;
    }
    if (!this.config && !this.defaultConfig.get().config) {
      console.warn("Use Library default configs \n" + (JSON.stringify({
        fullscreen: false,
        center: [43.1824528, -2.3878554],
        mapId: 'map',
        zoom: true,
        zoomValue: 12
      }, null, 2)));
      return;
    }
    if (this.config && this.defaultConfig.get().config) {
      console.warn("Overwrite defaultConfig with new set config duplicates values properties");
      // Rewrite
      this.checkAndAsignDefaultConfigs()
    }

  }

  private checkAndAsignDefaultConfigs() {

    if (!this.config!.center && this.defaultConfig.get().config.center) {
      this.config!.center = this.defaultConfig.get().config.center
    }
    if (!this.config!.fullscreen && this.defaultConfig.get().config.fullscreen) {
      this.config!.fullscreen = this.defaultConfig.get().config.fullscreen
    }

    if (!this.config!.scale && this.defaultConfig.get().config.scale) {
      this.config!.scale = this.defaultConfig.get().config.scale
    }

    if (!this.config!.layers && this.defaultConfig.get().config.layers) {
      this.config!.layers = this.defaultConfig.get().config.layers
    }

    if (!this.config!.zoom && this.defaultConfig.get().config.zoom) {
      this.config!.zoom = this.defaultConfig.get().config.zoom
    }

    if (!this.config!.watermark && this.defaultConfig.get().config.watermark) {
      this.config!.watermark = this.defaultConfig.get().config.watermark
    }

    if (!this.config!.fitBounds && this.defaultConfig.get().config.fitBounds) {
      this.config!.fitBounds = this.defaultConfig.get().config.fitBounds
    }
  }

  ngAfterViewInit(): void {
    this.setConfiguration();
    this.map = new Map(this.config || undefined, this.mapId || undefined);
    this.markers && (this.markers.length) && Markers.add(this.map.get(), this.markers);
    this.randomMarkers && Markers.add(this.map.get(), [], this.randomMarkers);
    this.markers && this.markers.length && this.map.fitBounds(this.markers);
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
