import { DomUtil } from 'leaflet';
import { Util } from 'leaflet';
import { ControlPosition } from 'leaflet';
import { Control } from 'leaflet';

const TextContent = Control.extend({
    // Inicialización
    initialize: function(options: {
        position: ControlPosition, title: string, subtitle: string
    }) {
        Util.setOptions(this, options);
    },
    // Opciones
    options: {
        position: 'bottomleft',
        title: '',
        subtitle: ''
    },
    // Añadir la informaci´on para formar el control personalizado
    onAdd: function() {
        const controlDiv = DomUtil.create('span', 'title-subtitle');
        this.options.title = (this.options.title === '') ? 'Route Title' : this.options.title;
        if (this.options.subtitle !== '') {
            controlDiv.innerHTML = `<h5>${this.options.title}</h5><span>${this.options.subtitle}</span>`;
        } else {
            controlDiv.innerHTML = `<h3>${this.options.title}</h3>`;
        }
        controlDiv.style.backgroundColor = 'white';
        controlDiv.style.textAlign = 'center';
        controlDiv.style.padding = '3px';
        controlDiv.style.borderRadius = '6px';
        controlDiv.style.border = '1px solid green';
        controlDiv.style.marginBottom = '5px';
        controlDiv.style.width = '100%';
        return controlDiv;
    }
});

export const textContent = (options?: {
    position?: ControlPosition, title?: string, subtitle?: string
}) => new TextContent(options);