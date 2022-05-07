import { Control, ControlPosition, DomUtil, Util } from "leaflet";

const FullScreenMap = Control.extend({

    options: {
        position: "topleft",
        exitText: 'Salir pantalla completa',
        fullText: "Ver en pantalla completa"
    },

    initialize: function (options?: { position?: ControlPosition, exitText?: string }) {
        Util.setOptions(this, options);
    },
    onAdd: function () {
        const container = DomUtil.create(
            "input",
            "leaflet-control-zoom leaflet-bar leaflet-control"
        );
        container.type = "button";
        container.title = this.options.fullText;
        container.style.backgroundImage =
            "url(https://cdn-icons-png.flaticon.com/512/2089/2089670.png)";
        container.style.backgroundSize = "15px 15px";
        container.style.backgroundRepeat = "no-repeat";
        container.style.backgroundPosition = "50% 50%";
        container.style.width = "32px";
        container.style.height = "32px";
        container.style.padding = "12px";
        container.style.lineHeight = "30px";
        container.style.fontSize = "22px";
        container.style.fontWeight = "bold";
        container.style.cursor = "pointer";


        container.onclick = () => {
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
            if (!document.fullscreenElement) { // Si no estamos a pantalla completa
                document.getElementById('map')?.requestFullscreen();
                container.title = this.options.exitText;
            } else {
                document.exitFullscreen();
                container.title = this.options.fullText;
            }
        };
        return container;
    },
});

export const fullScreenMap = (options?: {
    position?: ControlPosition, entryText?: string, exitText?: string
}) => new FullScreenMap(options);