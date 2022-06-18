
import { circle, Map, polyline } from 'leaflet';


class DrawMap {
    private map!: Map;
    routeConfig: {
        start: {
            color: string, weight: number, fillColor: string,
            fillOpacity: number, radius: number, label?: string
        },
        finish: {
            color: string, weight: number, fillColor: string,
            fillOpacity: number, radius: number, label?: string
        }
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

    drawPoints = (points: Array<{ position: {lat: number, lng: number} }>) => {
        // Add geographic coordinates to complete polyline that use to draw route
        const coordinates: [number, number][] = points.map((point) => {
            return [
                point.position.lat,
                point.position.lng
            ];
        });

        // Draw route using polyline
        polyline(coordinates, {
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

        this.map.fitBounds(coordinates);
    }

    addPoint(point: [number, number], start: boolean) {
        circle(point, (start) ? this.routeConfig.start : this.routeConfig.finish).addTo(this.map).bindPopup(
            (start) ? this.routeConfig.start.label || 'START' : this.routeConfig.finish.label || 'FINISH'
        );
    }

}

export { DrawMap };