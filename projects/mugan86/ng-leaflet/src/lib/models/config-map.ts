import { ILayers, IScaleOptions } from "./controls";

export interface IConfigMap {
    center?: [number, number];
    scale?: IScaleOptions | undefined;
    layers: ILayers
}