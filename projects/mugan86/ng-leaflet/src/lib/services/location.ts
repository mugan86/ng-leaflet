import { LatLng, marker, Map, circle } from "leaflet";


class OurLocation {
    private map!: Map;
    private zoom!: number;
    constructor(map: Map, zoom: number = 12) {
        if (map) {
            this.map = map;
            this.zoom = (zoom >= 0 && zoom <= 18) ? zoom : 12;
            this.find();
            return;
        }
        console.warn('You must pass correctly map object instance to apply correctly Our Location option');
    }

    find() {
        this.map.on('locationfound', (e: {
            accuracy: number, latlng: LatLng
        }) => {
            const markerItem = marker(e.latlng).addTo(this.map).bindPopup('My location');
            circle(e.latlng, {
                radius: e.accuracy,
                color: 'blue'
            }).addTo(this.map);
            /*this.map.fitBounds([
                [markerItem.getLatLng().lat, markerItem.getLatLng().lng]
            ]);*/

            this.map.flyTo([markerItem.getLatLng().lat, markerItem.getLatLng().lng], this.zoom || 12)


        });

        this.map.on('locationerror', (e: { message: string }) => console.error(e.message));

        this.map.locate();
    }
}

export { OurLocation };