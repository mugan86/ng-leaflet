import { Map } from 'leaflet';
import { tileLayerSelect } from '../config/tile-layers/helpers';
import { tileLayers } from '../config/tile-layers/ui';
import { IConfigMap } from '../models/config-map';
import { IScaleOptions } from '../models/controls';
import { Controls } from './controls.service';

export class BaseMap {
    private map!: Map;
    private mapId = 'map';
    private baseLayer = {
        map: tileLayers.baseLayers.default.map,
        atribution: tileLayers.baseLayers.default.atribution
    }
    private overLayer: { map: string, atribution: string } | undefined;
    private center!: [number, number];
    private scale!: IScaleOptions | undefined;
    private config!: IConfigMap | undefined;
    constructor(config?: IConfigMap) {
        this.config = config || undefined;
        this.center = config && config!!.center || [43.1824528,-2.3878554];
        this.scale = config && config.scale || undefined;
        this.init();
    }

    /**
     * Init map with set configurations
     */
    private init(): void {
        this.map = new Map(this.mapId).setView(this.center, 10);
        // this.setLayers();
        Controls.addBaseOverLayers(this.map)
        
    }
    get = () => this.map;

    private setLayers() {
        this.overLayer = this.config && this.config!!.layers!!.overLayers[0] || undefined;
        tileLayerSelect(this.baseLayer.map, {
            attribution: this.baseLayer.atribution,
        }).addTo(this.map);

        if (this.overLayer) {
            tileLayerSelect(this.overLayer.map, {
                attribution: this.baseLayer.atribution,
            }).addTo(this.map);
        }
    }

    /**
     * Place camera centering and zooming with location points
     * @param markers Location point to center /adjust zoom using all points
     */
    fitBounds(markers: Array<{ lng: number, lat: number }>) {
        this.get().fitBounds([
            ...markers.map((point) => [point.lat, point.lng] as [number, number]),
        ]);
    }

    protected setControls() {

    }

    
}