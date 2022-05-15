import { IConfigMap } from "../models/config-map";
import { BaseMap } from "./map"

class LeafletMap extends BaseMap {
    constructor(config?: IConfigMap, mapId?: string) {
        super(config, mapId);
    }
}

export { LeafletMap };