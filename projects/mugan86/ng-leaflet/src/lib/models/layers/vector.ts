import { ILayer } from ".";

interface IVectorLayer extends ILayer {
    stroke?: boolean;
    color?: string;
    weight?: number;
    opacity?: number; // Values between 0 an 1 (include)
}

// Circle and CircleMarker use
export interface ICircle extends IVectorLayer {
    radius?: number;
}

export interface IPolyline extends IVectorLayer { }
export interface IPolygon extends IVectorLayer { }

