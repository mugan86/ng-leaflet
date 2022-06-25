import { ControlPosition } from "leaflet";
import { MarkerColorOptions } from "../config/markers/default";
import { ILayers, IScaleOptions, IWatermarkOptions, IZoomOptions } from "./controls";

export interface IConfigMap {
    markerColor?: MarkerColorOptions;
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
    drawRoute?: {
        active?: boolean;
        title?: string;
        subtitle?: string;
        position?: ControlPosition; 
        showControl?: boolean;
    };
}

export interface ISizeMap {
    width: string;
    height: string;
}