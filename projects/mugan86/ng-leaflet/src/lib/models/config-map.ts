import { ILayers, IScaleOptions, IWatermarkOptions, IZoomOptions } from "./controls";

export interface IConfigMap {
    center?: [number, number];
    scale?: IScaleOptions | undefined;
    layers?: ILayers;
    zoom?: IZoomOptions;
    fullscreen?: boolean;
    watermark?: IWatermarkOptions;
    fitBounds?: boolean;
    ourLocation?: {
        active: boolean;
        zoom?: number;
    };
    drawRoute?: boolean;
}

export interface ISizeMap {
    width: string;
    height: string;
}