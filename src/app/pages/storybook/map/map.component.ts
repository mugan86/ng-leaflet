import { Component, Input, OnInit } from '@angular/core';
import { IConfigMap, IMarker } from '@mugan86/ng-leaflet';
import gpxParser from 'gpxparser';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{

  @Input() markers: Array<IMarker> = [{
    position: {
      lat: 43.17774378506745,
      lng: -2.4150770902633667
    }
  },
  {
    position: {
      lat: 43.177548188824325,
      lng: -2.4145513772964478
    }
  },
  {
    position: {
      lat: 43.177274353031386,
      lng: -2.4141544103622437
    }
  }];
  @Input() randomMarkers: boolean = false;
  @Input() size: { width: string, height: string } = { width: '100%', height: '600px' }
  @Input() config?: IConfigMap = {
    fullscreen: true,
    ourLocation: {
      active: true,
      zoom: 5
    },
    zoom: {
      default: 15
    },
    drawRoute: true
  };

  ngOnInit() {
    this.markers.length = 0;
    fetch('https://raw.githubusercontent.com/leaflet-maps-course/resources/main/tracks/track.gpx')
      .then(response => response.text())
      .then(data => {
        const gpx = new gpxParser(); //Create gpxParser Object
        gpx.parse(data); //parse gpx file from string data
        gpx.tracks[0].points.map((point) => {
          this.markers.push({
            position: {
              lat: point.lat,
              lng: point.lon
            }
          })
        });
      });

    /*axios.get('https://raw.githubusercontent.com/leaflet-maps-course/resources/main/tracks/track.gpx')
.then( result => {
    const gpx = new gpxParser(); //Create gpxParser Object
    gpx.parse(result.data); //parse gpx file from string data
    gpx.tracks[0].points.map((point) => console.log(point.lat, point.lon));
})
.catch( error => console.error(error));*/
  }
}
