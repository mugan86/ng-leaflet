import { Point } from "leaflet";

export interface IMarker {
    position: { lat: number; lng: number};
    draggable?: boolean;
    popup?: {
        content: string;
        options?: {
            offset: Point;
            maxWidth: number;
            minWidth: number;
            closeButton: boolean;
        }
    }
}