import { control, ControlPosition, Map } from 'leaflet';
import { tileLayerSelect } from '../config/tile-layers/helpers';
import { ILayers, IScaleOptions } from './../models/controls'
class Controls {
    static addScale(map: Map, config?: IScaleOptions) {
        // Vamos a añadir el control de escala
        control.scale(config).addTo(map);
    }

    /**
     * Generate layers control to available users want differente layers
     * to use in maps.
     * // TODO Need to refactor because in this function we use repetitive functions
     * @param map Map instantiate object when add control layers
     * @param layers Layers with base and overlayers to add in map
     * @param position control position in map
     */
    static addBaseOverLayers(map: Map, layers: ILayers, position: ControlPosition = 'topright') {
        console.log(layers);
        if (!layers.baseLayers || !layers.overLayers) {
            throw new Error("Need to add Base and Over Layers");
        }

        if (layers.baseLayers.length < 2) {
            console.warn("Take advantage of at least two base layers to take advantage of this feature")
        }

        // Start show layer by default. TODO make dinamically with "default" boolean value
        const defaultLayer = tileLayerSelect(layers.baseLayers[0].map, {
            attribution: layers.baseLayers[0].atribution
        }).addTo(map);

        const baseLayers = layers.baseLayers.reduce((a, layer, index) => {
            return (index > 0) ?({
                ...a, [layer.label]: tileLayerSelect(layer.map, {
                    attribution: layer.atribution
                })
            }) : {
                ...a, [layers.baseLayers[0].label]: defaultLayer // Map Default select layer
            }
        }, {} // Start value
        );

        const overLayers = layers.overLayers.reduce((a, layer) => ({ ...a, [layer.label]: tileLayerSelect(layer.map) }), {});


        // Layers controls
        control.layers(baseLayers, overLayers, {
            position
        }).addTo(map);
    }
}

export { Controls }