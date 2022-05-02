import { ControlPosition } from "leaflet";

export interface IScaleOptions {
    maxWidth?: number | undefined;
    metric?: boolean | undefined;
    imperial?: boolean | undefined;
    updateWhenIdle?: boolean | undefined;
}

export interface ILayers {
    baseLayers: Array<IBaseLayer>,
    overLayers: Array<IOverLayer>
}

export interface IBaseLayer {
    label: string,
    map: string,
    atribution: string,
    default?: boolean
}

export interface IOverLayer {
    label: string,
    map: string,
    select: boolean
}

export interface IZoomOptions {
    zoomInTitle?: string,
    zoomOutTitle?: string,
    position?: ControlPosition
}