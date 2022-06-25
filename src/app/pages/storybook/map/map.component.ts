import { IConfigMap, IMarker } from '@mugan86/ng-leaflet';
import { Component } from '@angular/core';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent{
  markers: Array<IMarker> = [
    {
      position: {
        lat: 43.17757110078426,
        lng: -2.3661233885984085,
      },
    },
    {
      position: {
        lat: 43.177781697765305,
        lng: -2.367583962060063,
      },
    },
  ];
  config?: IConfigMap = {
    fitBounds: true,
    drawRoute: {
      active: false,
      showControl: false
    },
    markerColor: 'orange'
  };
  /*@Input() markers: Array<IMarker> = [{
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
    drawRoute: {
      active: true,
      title: 'Jabali Trail Short',
      showControl: true
    }
  };
  */
  /*markers: Array<IMarker> = [
    {
      position: {
        lat: 43.17757110078426,
        lng: -2.3661233885984085,
      },
    },
    {
      position: {
        lat: 43.177781697765305,
        lng: -2.367583962060063,
      },
    },
  ];
  config?: IConfigMap = {
    fitBounds: true,
    drawRoute: {
      active: true,
      showControl: false
    },
    markerColor: 'gold'
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
    }*/
}
