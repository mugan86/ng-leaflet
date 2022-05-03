import { Control, ControlPosition, DomUtil, Util } from "leaflet";


const Watermark = Control.extend({

    options: {
        position: 'bottomleft',
        img: 'https://raw.githubusercontent.com/leaflet-maps-course/resources/main/logotypes/am.png',
        border: true,
        size: '60px',
        borderColor: '#506bff'
    },

    initialize: function(options: {
        position: ControlPosition, img: string, border: boolean
    }) {
        Util.setOptions(this, options);
    },
    onAdd: function() {
        const img = DomUtil.create('img');

        img.src = this.options.img;
        img.style.width = this.options.size;
        if (this.options.border) {
            img.style.borderBottom = `3px solid ${this.options.borderColor}`;
        }

        return img;
    },
});

export const watermark = (options?: {
    position?: ControlPosition, img?: string, border?: boolean
}) => new Watermark(options);