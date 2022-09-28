import { ControlPosition } from "leaflet";
import { MarkerColorOptions } from "../config/markers/default";
import { IBackToHomeOptions, IBaseLayer, ILayers, IScaleOptions, IWatermarkOptions, IZoomOptions } from "./controls";

export interface IConfigMap {
    markerColor?: MarkerColorOptions;
    center?: [number, number];
    scale?: IScaleOptions | undefined;
    layers?: ILayers;
    zoom?: IZoomOptions;
    fullscreen?: boolean;
    defaultLayer?: IBaseLayer;
    watermark?: IWatermarkOptions;
    fitBounds?: boolean;
    ourLocation?: IOurLocationOptions;
    drawRoute?: IDrawRouteOptions;
    backToHome?: IBackToHomeOptions;
}

interface IOurLocationOptions {
    active: boolean;
    zoom?: number;
}

interface IDrawRouteOptions {
    active?: boolean;
    title?: string;
    subtitle?: string;
    position?: ControlPosition;
    showControl?: boolean;
}

export interface ISizeMap {
    width: string;
    height: string;
}