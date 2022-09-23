import { Point } from "leaflet";

interface ILayer {
    position: { lat: number; lng: number };
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

export * from './ui';
export * from './vector';
export { ILayer };