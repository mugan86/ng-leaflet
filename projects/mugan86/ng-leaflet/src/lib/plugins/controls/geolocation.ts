import {
    DomUtil,
    Util,
    Map,
    Control,
    ControlPosition,
  } from "leaflet";
import { OurLocation } from "../../services/location";
  
  const Geolocation = Control.extend({
    initialize: function (options: {position: ControlPosition}) {
      Util.setOptions(this, options);
    },
    options: {
      position: "topleft",
      zoom: 12
    },
    onAdd: function(map: Map) {
      const container = DomUtil.create("input");
      container.type = "button";
      container.title = "Ir a mi ubicación";
      container.style.backgroundColor = "whitesmoke";
      container.style.color = "black";
      container.style.backgroundImage =
            "url(https://raw.githubusercontent.com/leaflet-maps-course/resources/main/img/2969400_geolocation_gps_navigation_position_icon.png)";
      container.style.backgroundSize = "30px 30px";
      container.style.backgroundRepeat = "no-repeat";
      container.style.width = "32px";
      container.style.height = "32px";
      container.style.padding = "10px";
      container.style.objectFit = "cover";
      
      container.onclick = () => {
          new OurLocation(map, this.options.zoom);
          container.disabled = true;
      };
  
      return container;
    },
  });
  
  export const geolocation = (options?: { position?: ControlPosition, zoom?: number }) =>
    new Geolocation(options);