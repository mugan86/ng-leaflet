export interface IScaleOptions {
    maxWidth?: number | undefined;
    metric?: boolean | undefined;
    imperial?: boolean | undefined;
    updateWhenIdle?: boolean | undefined;
}

export interface ILayers {
    baseLayers: Array<{
        label: string,
        map: string,
        atribution: string
    }>,
    overLayers: Array<{
        label: string,
        map: string
    }>
}