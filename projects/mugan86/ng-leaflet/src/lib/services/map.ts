import { Map } from 'leaflet';
import { tileLayerSelect } from '../config/tile-layers/helpers';
import { tileLayers } from '../config/tile-layers/ui';
import { IBaseLayer } from '../models';
import { IConfigMap } from '../models/config-map';
import { IMarker } from '../models/marker';

export class BaseMap {
    private map!: Map;
    private mapId = 'map';
    private center!: [number, number];
    private zoom = true;
    private zoomValue?: number;
    private defaultLayer?: IBaseLayer;
    constructor(config?: IConfigMap, mapId?: string) {
        this.center = config && config!!.center || [43.1824528, -2.3878554];
        this.mapId = (mapId) || 'map'
        this.zoom = config && (config!!.zoom) ? false : true;
        this.zoomValue = config && config.zoom?.default!! || 12;
        this.defaultLayer = config && config.defaultLayer?.map!! &&  !config?.layers!!
            ? config.defaultLayer :
            {
                map: tileLayers.baseLayers.default.map,
                atribution: tileLayers.baseLayers.default.atribution
            }


        this.init();
    }

    /**
     * Init map with set configurations
     */
    private init(): void {
        this.map = new Map(this.mapId, {
            zoomControl: this.zoom
        }).setView(this.center, this.zoomValue);
       
        tileLayerSelect(this.defaultLayer?.map, {
            attribution: this.defaultLayer?.atribution
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