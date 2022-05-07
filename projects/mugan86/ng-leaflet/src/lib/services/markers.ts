import { Map, marker } from "leaflet";

class Markers {

    /**
     * Add Markers in map to view different locations
     * @param markers collection to location points (lat, lng)
     */
    static add(map: Map, markers: Array<{ lng: number, lat: number }> = [], random: boolean = false) {
        if (markers.length === 1 && !random) {
            marker([markers[0].lat, markers[0].lng]).addTo(map);
            return;
        }
        if (random) {
            markers = Markers.randomValues(map);
        }
        markers.map((markerItem) => marker([markerItem.lat, markerItem.lng]).addTo(map));
    }

    static randomValues(map: Map) {
        const bounds = map.getBounds();

        const southWest = bounds.getSouthWest();
        const northEast = bounds.getNorthEast();
        const lngSpan = northEast.lng - southWest.lng;
        const latSpan = northEast.lat - southWest.lat;

        let allPoints = [];

        // generate random points and add to array 'allPoints'
        for (let i = 0; i < 30; i++) {
            allPoints.push({
                lat: southWest.lat + latSpan * Math.random(),
                lng: southWest.lng + lngSpan * Math.random(),
            });
        }
        return allPoints;
    }

    /**
     * Pending to implement
     */
    static addWithCluster() { }
}

export { Markers };