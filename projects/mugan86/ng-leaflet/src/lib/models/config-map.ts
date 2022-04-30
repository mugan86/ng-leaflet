export interface IConfigMap {
    location?: [number, number];
    mapId?: string;
    baseLayer?: {
        map: string,
        atribution: string
    },
    overLayer?: {
        map: string,
        atribution: string
    }
}