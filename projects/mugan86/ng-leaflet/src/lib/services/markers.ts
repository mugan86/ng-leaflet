import { Map, marker } from "leaflet";

class Markers {

    /**
     * Add Markers in map to view different locations
     * @param markers collection to location points (lat, lng)
     */
    static add(markers: Array<{ lng: number, lat: number }>, map: Map) {
        markers.map((markerItem) => marker([markerItem.lat, markerItem.lng]).addTo(map));
    }

    /**
     * Pending to implement
     */
    static addWithCluster() { }
}

export { Markers };