import { ControlPosition } from "leaflet";

export interface IScaleOptions {
    show?: boolean;
    position?: ControlPosition;
    maxWidth?: number;
    metric?: boolean;
    imperial?: boolean;
    /**
     * If true, the control is updated on moveend, otherwise it's always 
     * up-to-date (updated on move). Default: false
    */
    updateWhenIdle?: boolean | undefined;
}

export interface ILayers {
    baseLayers: Array<IBaseLayer>;
    overLayers?: Array<IOverLayer>
}

export interface IBaseLayer {
    label?: string;
    map: string;
    atribution: string;
    default?: boolean
}

export interface IOverLayer {
    label: string;
    map: string;
    select: boolean
}

export interface IZoomOptions {
    zoomInTitle?: string;
    zoomOutTitle?: string;
    position?: ControlPosition;
    default?: number;
}

export interface IWatermarkOptions {
    img?: string;
    border?: boolean;
    position?: ControlPosition;
    size?: string;
    borderColor?: string;
}