import { ILayers, IScaleOptions, IZoomOptions } from "./controls";

export interface IConfigMap {
    center?: [number, number];
    scale?: IScaleOptions | undefined;
    layers: ILayers,
    zoom?: IZoomOptions,
    fullscreen?: boolean
}