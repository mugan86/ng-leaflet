import { Map } from 'leaflet';
import { tileLayerSelect } from '../config/tile-layers/helpers';
import { tileLayers } from '../config/tile-layers/ui';
import { IConfigMap } from '../models/config-map';
import { IMarker } from '../models/marker';

export class BaseMap {
    private map!: Map;
    private mapId = 'map';
    private center!: [number, number];
    private zoom = true;
    private zoomValue?: number;
    constructor(config?: IConfigMap, mapId?: string) {
        this.center = config && config!!.center || [43.1824528,-2.3878554];
        this.mapId = (mapId) || 'map'
        this.zoom = config && (config!!.zoom) ? false: true;
        this.zoomValue = config && config.zoom?.default || 12;
        
        this.init(config!!);
    }

    /**
     * Init map with set configurations
     */
    private init(config: IConfigMap): void {
        this.map = new Map(this.mapId, {
            zoomControl: this.zoom
        }).setView(this.center, this.zoomValue);

        if ((!config || !config.layers) && !config.defaultLayer) {
            tileLayerSelect(tileLayers.baseLayers.default.map, {
                attribution: tileLayers.baseLayers.default.atribution
            }).addTo(this.map)
            return;
        }
        tileLayerSelect(config.defaultLayer?.map, {
            attribution: config.defaultLayer?.atribution
        }).addTo(this.map)

    }
    get = () => this.map;

    /**
     * Place camera centering and zooming with location points
     * @param markers Location point to center /adjust zoom using all points
     */
    fitBounds(markers: Array<IMarker>) {
        this.get().fitBounds([
            ...markers.map((point) => [point.position.lat, point.position.lng] as [number, number]),
        ]);
    }    
}