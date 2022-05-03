import { Map } from 'leaflet';
import { IConfigMap } from '../models/config-map';

export class BaseMap {
    private map!: Map;
    private mapId = 'map';
    private center!: [number, number];
    private zoom = true;
    constructor(config?: IConfigMap) {
        this.center = config && config!!.center || [43.1824528,-2.3878554];
        this.zoom = (config!.zoom) ? false: true;
        this.init();
    }

    /**
     * Init map with set configurations
     */
    private init(): void {
        this.map = new Map(this.mapId, {
            zoomControl: this.zoom
        }).setView(this.center, 10);
    }
    get = () => this.map;

    /**
     * Place camera centering and zooming with location points
     * @param markers Location point to center /adjust zoom using all points
     */
    fitBounds(markers: Array<{ lng: number, lat: number }>) {
        this.get().fitBounds([
            ...markers.map((point) => [point.lat, point.lng] as [number, number]),
        ]);
    }    
}