import { ILayers, IScaleOptions, IWatermarkOptions, IZoomOptions } from "./controls";

export interface IConfigMap {
    center?: [number, number];
    scale?: IScaleOptions | undefined;
    layers?: ILayers;
    zoom?: IZoomOptions;
    fullscreen?: boolean;
    watermark?: IWatermarkOptions;
    fitBounds?: boolean;
}

export interface ISizeMap {
    width: string;
    height: string;
}