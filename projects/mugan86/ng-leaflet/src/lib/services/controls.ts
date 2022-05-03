import { control, ControlPosition, Map } from 'leaflet';
import { tileLayerSelect } from '../config/tile-layers/helpers';
import { IBaseLayer, IOverLayer, ILayers, IScaleOptions, IZoomOptions, IWatermarkOptions } from '../models/controls'
import { fullScreenMap } from '../plugins/controls/full-screen-map';
import { watermark } from '../plugins/controls/watermark';
class Controls {

    static changeZoomConfig(map: Map, config?: IZoomOptions) {
        control.zoom({
            zoomInTitle: config!!.zoomInTitle || 'Zoom in',
            zoomOutTitle: config!!.zoomOutTitle || 'Zoom out',
            position: config!!.position || 'topleft'
        }).addTo(map);
    }
    static addScale(map: Map, config?: IScaleOptions) {
        // Vamos a añadir el control de escala
        control.scale(config).addTo(map);
    }

    /**
     * Generate layers control to available users want differente layers
     * to use in maps.
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

        // Layers controls
        control.layers(
            this.groupBaseLayers(
                layers.baseLayers, map),
            this.groupOverLayers(layers.overLayers, map), {
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

    static activeFullScreen(map: Map, position?: ControlPosition) {
        fullScreenMap({
            position: (position) || 'topleft'
        }).addTo(map)
    }

    static activeWatermark(map: Map, config: IWatermarkOptions) {
        watermark(config).addTo(map)
    }

    
}

export { Controls }