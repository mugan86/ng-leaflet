import { Control, DomUtil, Map } from 'leaflet';
import { IBackToHomeOptions } from '../../models/controls';

import { compareToArrays } from './../../helpers/array';

const htmlTemplate =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.451L16 6.031 0 18.451v-5.064L16 .967l16 12.42zM28 18v12h-8v-8h-8v8H4V18l12-9z" /></svg>';

const BackToHome = Control.extend({
  options: {
    home: { lat: 43.1746, lng: -2.4125 },
    position: 'topleft',
    text: 'Volver al punto de inicio',
  },
  onAdd: function (map: Map) {
    const btn = DomUtil.create('button');
    let moveToStart = false;
    btn.title = 'back to home';
    btn.style.width = '40px';
    btn.innerHTML = htmlTemplate;
    btn.className += 'leaflet-bar back-to-home hidden';
    btn.style.visibility = 'hidden';

    btn.onclick = () => {
      map.flyTo([this.options.home.lat, this.options.home.lng], 13);
      btn.style.visibility = 'hidden';
      moveToStart = true;
    };

    map.on('moveend', () => {
      const { lat: latCenter, lng: lngCenter } = map.getCenter();

      const latC = +latCenter.toFixed(3) * 1;
      const lngC = +lngCenter.toFixed(3) * 1;
  
      const defaultCoordinate = [this.options.home.lat, this.options.home.lng];
  
      const centerCoordinate = [latC, lngC];
  
      if (!moveToStart && !compareToArrays(centerCoordinate, defaultCoordinate)) {
        btn.style.visibility = 'visible';
      }
      if (btn.style.visibility === 'hidden') {
          moveToStart = false;
      }
      
    });

    return btn;
  },
});

export const backToHome = (options?: IBackToHomeOptions) =>
  new BackToHome(options);