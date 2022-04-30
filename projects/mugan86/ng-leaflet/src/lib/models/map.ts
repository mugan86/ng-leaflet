import { Map } from 'leaflet';
import { tileLayerSelect } from '../config/tile-layers/helpers';
import { tileLayers } from '../config/tile-layers/ui';
import { IConfigMap } from './config-map';

export class BaseMap {
    private map!: Map;
    private mapId = 'map';
    private baseLayer = {
        map: tileLayers.baseLayers.default.map,
        atribution: tileLayers.baseLayers.default.atribution
    }
    private overLayer: { map: string, atribution: string } | undefined;
    private location!: [number, number];
    constructor(config?: IConfigMap) {
        this.location = config && config!!.location || [0, 0];
        this.mapId = config && config!!.mapId || 'map';
        this.overLayer = config && config!!.overLayer || undefined;
        this.init();
    }
    protected init(): void {
        this.map = new Map(this.mapId).setView(this.location, 10);

        tileLayerSelect(this.baseLayer.map, {
            attribution: this.baseLayer.atribution,
        }).addTo(this.map);

        if (this.overLayer) {
            tileLayerSelect(this.overLayer.map, {
                attribution: this.baseLayer.atribution,
            }).addTo(this.map);
        }
    }
    protected getMap = () => this.map;

    /**
     * Place camera centering and zooming with location points
     * @param markers Location point to center /adjust zoom using all points
     */
    protected fitBounds(markers: Array<{ lng: number, lat: number }>) {
        this.getMap().fitBounds([
            ...markers.map((point) => [point.lat, point.lng] as [number, number]),
        ]);
    }
}