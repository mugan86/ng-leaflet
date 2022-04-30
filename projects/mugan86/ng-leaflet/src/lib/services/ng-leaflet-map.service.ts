import { marker } from "leaflet";
import { IConfigMap } from "../models/config-map";
import { BaseMap } from "./../models/map"

class NgLeafletMap extends BaseMap {
    constructor(config?: IConfigMap) {
        super(config);
    }
    /**
     * Add Markers in map to view different locations
     * @param markers collection to location points (lat, lng)
     * @param fitBounds option to center using markers all positions
     */
    addMarkers(markers: Array<{ lng: number, lat: number }>, fitBounds: boolean = true) {
        markers.map((markerItem) => marker([markerItem.lat, markerItem.lng]).addTo(this.getMap()));
        if (fitBounds) {
            this.fitBounds(markers);
        }
    }
}

export { NgLeafletMap };