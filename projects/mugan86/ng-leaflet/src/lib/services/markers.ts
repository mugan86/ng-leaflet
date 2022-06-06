import { Icon, Map, marker } from "leaflet";
import { IMarker } from "../models/marker";

class Markers {
    /**
     * Add Markers in map to view different locations
     * @param markers collection to location points (lat, lng)
     */
    static add(map: Map, markers: Array<IMarker> = [], random: boolean = false) {
        const options = {
            icon: new Icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
              })
        };
        if (markers.length === 1 && !random) {
            marker([markers[0].position.lat, markers[0].position.lng], options).addTo(map);
            return;
        }
        if (random) {
            markers = Markers.randomValues(map);
        }
        markers.map((markerItem) => {
            const markerElement = marker([markerItem.position.lat, markerItem.position.lng],{
                ...options, draggable: markerItem.draggable
            }).addTo(map);
            (markerItem.popup) && markerElement.bindPopup(markerItem.popup.content);
        });
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
                position: {
                    lat: southWest.lat + latSpan * Math.random(),
                    lng: southWest.lng + lngSpan * Math.random(),
                }
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