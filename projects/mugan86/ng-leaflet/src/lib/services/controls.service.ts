import { control, ControlPosition, Map } from 'leaflet';
import { tileLayerSelect } from '../config/tile-layers/helpers';
import { IBaseLayer, IOverLayer, ILayers, IScaleOptions } from './../models/controls'
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
        if (!layers.baseLayers || !layers.overLayers) {
            throw new Error("Need to add Base and Over Layers");
        }

        if (layers.baseLayers.length < 2) {
            console.warn("Take advantage of at least two base layers to take advantage of this feature")
        }


        const baseLayers = this.groupBaseLayers(
            layers.baseLayers, map);


        const overLayers = this.groupOverLayers(layers.overLayers, map);


        // Layers controls
        control.layers(baseLayers, overLayers, {
            position
        }).addTo(map);
    }

    private static groupBaseLayers(layers: Array<IBaseLayer>, map: Map) {

        const findDefaultLayerConfig = layers.find((layer) => layer.default)
        const defaultLayer = tileLayerSelect(findDefaultLayerConfig!!.map, {
            attribution: findDefaultLayerConfig!!.atribution
        }).addTo(map);

        return layers.reduce((a, layer) => {
            return (!layer.default) ? ({ // Add NO default layers
                ...a, [layer.label]: tileLayerSelect(layer.map, {
                    attribution: layer.atribution
                })
            }) : {
                ...a, ...{ [layer.label]: defaultLayer } // Map Default select layer
            }
        }, {} // Start value
        );

    }

    private static groupOverLayers(layers: Array<IOverLayer>, map: Map) {
        return layers.reduce((a, layer) => ({
            ...a, [layer.label]: (layer.select) ?
                tileLayerSelect(layer.map).addTo(map) :
                tileLayerSelect(layer.map)
        }), {});
    }
}

export { Controls }