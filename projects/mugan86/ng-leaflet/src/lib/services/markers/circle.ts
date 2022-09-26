
import { ICircle } from "../../models/layers";
import { Map, circle } from "leaflet";
class Circle {

    /**
     * Add Markers in map to view different locations
     * @param markers collection to location points (lat, lng)
     */
    static add(map: Map, markers: Array<ICircle> = []) {

        if (markers.length === 1) {
            const markerData = markers[0];
            const markerElement = circle([markerData.position.lat, markerData.position.lng], Circle.options(markers[0])).addTo(map);
            (markers[0].popup) && markerElement.bindPopup(markers[0].popup.content);
            return;
        }

        markers.forEach((item: ICircle) => {
            const options = Circle.options(item);
            const markerElement = circle([item.position.lat, item.position.lng], options).addTo(map);
            (item.popup) && markerElement.bindPopup(item.popup.content);
        });
    }

    private static options(circle: ICircle) {
        return {
            radius: circle.radius || 100,
            opacity: circle.opacity || 0.7,
            weight: circle.weight || 3,
            stroke: (circle.stroke || circle.stroke === undefined)? true : false,
            color: circle.color || '#3388ff'
        }
    }
}

export { Circle };