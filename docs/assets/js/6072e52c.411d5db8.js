"use strict";(self.webpackChunkng_leaflet_documentation=self.webpackChunkng_leaflet_documentation||[]).push([[4443],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return k}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=c(t),k=r,g=m["".concat(p,".").concat(k)]||m[k]||s[k]||o;return t?a.createElement(g,i(i({ref:n},l),{},{components:t})):a.createElement(g,i({ref:n},l))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},41:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],u={title:"Kokapenean erdiratu",sidebar_position:3,description:"Lehen bi kontzeptu nagusiak trebatu ditugun ostean, kokapenaren koordenatuak zehaztuko ditugu mapan zehazteko"},p="Kokapenean erdiratu",c={unversionedId:"eu/aspectos-basicos/centrar-en-ubicacion",id:"eu/aspectos-basicos/centrar-en-ubicacion",isDocsHomePage:!1,title:"Kokapenean erdiratu",description:"Lehen bi kontzeptu nagusiak trebatu ditugun ostean, kokapenaren koordenatuak zehaztuko ditugu mapan zehazteko",source:"@site/docs/eu/aspectos-basicos/centrar-en-ubicacion.md",sourceDirName:"eu/aspectos-basicos",slug:"/eu/aspectos-basicos/centrar-en-ubicacion",permalink:"/ng-leaflet/eu/aspectos-basicos/centrar-en-ubicacion",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Kokapenean erdiratu",sidebar_position:3,description:"Lehen bi kontzeptu nagusiak trebatu ditugun ostean, kokapenaren koordenatuak zehaztuko ditugu mapan zehazteko"},sidebar:"tutorialSidebar",previous:{title:"Tamaina pertsonalizatu",permalink:"/ng-leaflet/eu/aspectos-basicos/personalizar-tamano"},next:{title:"Botoien posizioa / testua",permalink:"/ng-leaflet/eu/zoom/positions-btn-texts"}},l=[],s={toc:l};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kokapenean-erdiratu"},"Kokapenean erdiratu"),(0,o.kt)("p",null,"Une honetan kokapenaren koordenatu geografikoak izanda erdiratuko dugu kamera, ondo ikusteko."),(0,o.kt)("p",null,"Une honerarte, informazio hau ez badugu gehittzen era lehenetsian ezarrita dauden koordenatu geografikoak erabiliko dira, bi zenbakiko array bat erabiliz non lehenbizi latitudea eta bigarrena longitudea izango da."),(0,o.kt)("p",null,"Propietatearen egituraren barruan sartu behar ditugu koordenatu geografikoak:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"configMap: IConfigMap = {\n    center: [number, number],\n    // [lat, lng] as  [number, number]\n};\n")),(0,o.kt)("p",null,"Konponentean informazio hau gehituko dugu:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Component } from '@angular/core';\nimport { IConfigMap } from '@mugan86/ng-leaflet';\nimport { PLACES_LIST_LOCATIONS } from './locations';\n\n@Component({\n  selector: 'my-app',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css'],\n})\nexport class AppComponent {\n  locations = PLACES_LIST_LOCATIONS;\n  locationsKeys = Object.keys(this.locations);\n\n  configMap: IConfigMap = {\n    center: this.locations.BARCELONA as [number, number],\n    // [lat, lng] as  [number, number]\n  };\n}\n")),(0,o.kt)("p",null,"Informazioa HTML-ean gehituz:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ng-leaflet-map\n  [mapId]="\'center__position\'"\n  [config]="configMap"\n></ng-leaflet-map>\n')),(0,o.kt)("p",null,"Hurrengo emaitza lorturik:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/02-mapa-center.png",alt:"Mapa erdian"})),(0,o.kt)("p",null,"Hona hemen adibidea proiektu gisa probatu eta aldaketak egiteko nahi dugun modura:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/angular-leaflet-map-basic-set-center-position?embed=1&file=src/app/app.component.ts&theme=dark"},"Stackblitz - Kokapenean erdiratu")))}m.isMDXComponent=!0}}]);