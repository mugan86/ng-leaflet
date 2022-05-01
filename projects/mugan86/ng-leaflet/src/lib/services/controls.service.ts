import { control, ControlPosition, Map } from 'leaflet';
import { tileLayerSelect } from '../config/tile-layers/helpers';
import { tileLayers } from '../config/tile-layers/ui';
import { IScaleOptions } from './../models/controls'
class Controls {
    static addScale(map: Map, config?: IScaleOptions) {
        // Vamos a añadir el control de escala
        control.scale(config).addTo(map);
    }

    static addBaseOverLayers(map: Map, position: ControlPosition = 'topright') {
        // Capas base
        const defaultTileLayer = tileLayerSelect().addTo(map);

        const cycleMapThunderForest = tileLayerSelect(tileLayers.baseLayers.cycloOsm.map);

        const oSMManik = tileLayerSelect(tileLayers.baseLayers.osmManik.map);


        // Capas de superposición

        const railwayMap = tileLayerSelect(tileLayers.overlayers.openRailway);

        const hiking = tileLayerSelect(tileLayers.overlayers.wayMarkedTrails.hiking);



        // Control de las capas

        const baseLayers = {
            'Default': defaultTileLayer,
            'Cycle Map': cycleMapThunderForest,
            'OSM Manik': oSMManik
        };

        const overlays = {
            'Hiking': hiking,
            'Railway': railwayMap
        };

        control.layers(baseLayers, overlays, {
            position
        }).addTo(map);
    }
}

export { Controls }