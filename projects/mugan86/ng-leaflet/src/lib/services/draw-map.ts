
import { IMarker } from './../models';
import { circle, Map, polyline } from 'leaflet';
import { IRoutePointConfig } from '../models';


class DrawMap {
    private map!: Map;
    routeConfig: {
        start: IRoutePointConfig,
        finish: IRoutePointConfig,
    } = {
            start: {
                color: 'white', weight: 1, fillColor: 'green',
                fillOpacity: 1, radius: 7.5
            },
            finish: {
                color: 'white', weight: 1, fillColor: 'red',
                fillOpacity: 1, radius: 7.5
            }
        }
    coordinates: [number, number][] = [];

    constructor(map: Map) {
        this.map = map;
    }
    /*getPoints = (trackUrl: string) => {
      axios
        .get(
          trackUrl
        )
        .then((result) => {
          const gpx = new gpxParser(); //Create gpxParser Object
          gpx.parse(result.data); //parse gpx file from string data
          this.drawPoints(gpx.tracks[0].points);
        })
        .catch((error) => console.error(error));
    };*/

    coordinatesFromMarkers = (points: Array<IMarker>) => {
        this.coordinates = points.map((point) => {
            return [
                point.position.lat,
                point.position.lng
            ];
        });
    }

    coordinatesFromGpx = (trackUrl: string) => {
        
        /*this.coordinates = points.map((point) => {
            return [
                point.position.lat,
                point.position.lng
            ];
        });*/
        console.log(trackUrl);
    }

    drawPoints = (points: Array<IMarker> = [], trackUrl: string = '') => {
        // Add geographic coordinates to complete polyline that use to draw route
        
        (points.length >=3 ) ? this.coordinatesFromMarkers(points) : this.coordinatesFromGpx(trackUrl);
        // Draw route using polyline
        polyline(this.coordinates, {
            color: 'orange'
        }).addTo(this.map);

        // Circle to define start point
        this.addPoint([
            points[0].position.lat, points[0].position.lng
        ], true);

        // Circle to define finish point
        this.addPoint([
            points[points.length - 1].position.lat, points[points.length - 1].position.lng
        ], false);

        this.map.fitBounds(this.coordinates);
    }

    addPoint(point: [number, number], start: boolean) {
        circle(point, (start) ? this.routeConfig.start : this.routeConfig.finish).addTo(this.map).bindPopup(
            (start) ? this.routeConfig.start.label || 'START' : this.routeConfig.finish.label || 'FINISH'
        );
    }

}

export { DrawMap };