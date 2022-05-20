import { Inject, Injectable } from "@angular/core";
import { IConfigMap, ISizeMap } from "../models";

@Injectable({
    providedIn: 'root'
})
export class DefaultConfig {
    constructor(@Inject('config') private config: IConfigMap,
        @Inject('size') private size: ISizeMap) {
        if (!this.size) {
            this.size = {
                width: '100%',
                height: '500px'
            }
        }
    }
    get() {
        return {
            size: this.size,
            config: this.config
        }
    }
}