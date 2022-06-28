"use strict";(self.webpackChunkng_leaflet_documentation=self.webpackChunkng_leaflet_documentation||[]).push([[3302],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6746:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={title:"Center location",sidebar_position:3,description:"Once we have controlled the first two aspects, we are going to specify the point in coordinates where we want to locate ourselves"},s="Center location",l={unversionedId:"en/aspectos-basicos/centrar-en-ubicacion",id:"en/aspectos-basicos/centrar-en-ubicacion",isDocsHomePage:!1,title:"Center location",description:"Once we have controlled the first two aspects, we are going to specify the point in coordinates where we want to locate ourselves",source:"@site/docs/en/aspectos-basicos/centrar-en-ubicacion.md",sourceDirName:"en/aspectos-basicos",slug:"/en/aspectos-basicos/centrar-en-ubicacion",permalink:"/ng-leaflet/en/aspectos-basicos/centrar-en-ubicacion",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Center location",sidebar_position:3,description:"Once we have controlled the first two aspects, we are going to specify the point in coordinates where we want to locate ourselves"},sidebar:"tutorialSidebar",previous:{title:"Custom size",permalink:"/ng-leaflet/en/aspectos-basicos/personalizar-tamano"},next:{title:"Position / Buttons Text",permalink:"/ng-leaflet/en/zoom/positions-btn-texts"}},p=[],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"center-location"},"Center location"),(0,a.kt)("p",null,"At this moment we want to center the map camera in some coordinates that we want to specify."),(0,a.kt)("p",null,"Until now, if we do not add this information, it will use a default coordinate having as reference an array with two numbers in which the latitude and longitude will be."),(0,a.kt)("p",null,"We have to introduce the coordinates in the following structure of the property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"configMap: IConfigMap = {\n    center: [number, number],\n    // [lat, lng] as  [number, number]\n};\n")),(0,a.kt)("p",null,"With this information added in the component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Component } from '@angular/core';\nimport { IConfigMap } from '@mugan86/ng-leaflet';\nimport { PLACES_LIST_LOCATIONS } from './locations';\n\n@Component({\n  selector: 'my-app',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css'],\n})\nexport class AppComponent {\n  locations = PLACES_LIST_LOCATIONS;\n  locationsKeys = Object.keys(this.locations);\n\n  configMap: IConfigMap = {\n    center: this.locations.BARCELONA as [number, number],\n    // [lat, lng] as  [number, number]\n  };\n}\n")),(0,a.kt)("p",null,"Adding the information in the HTML:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ng-leaflet-map\n  [mapId]="\'center__position\'"\n  [config]="configMap"\n></ng-leaflet-map>\n')),(0,a.kt)("p",null,"The result is:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/02-mapa-center.png",alt:"Map in Center"})),(0,a.kt)("p",null,"And here the demo that you can use to test it and play with it:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/angular-leaflet-map-basic-set-center-position?embed=1&file=src/app/app.component.ts&theme=dark"},"Stackblitz - Center in Map")))}m.isMDXComponent=!0}}]);