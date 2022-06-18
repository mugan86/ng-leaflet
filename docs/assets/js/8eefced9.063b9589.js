"use strict";(self.webpackChunkng_leaflet_documentation=self.webpackChunkng_leaflet_documentation||[]).push([[9733],{3905:function(e,a,t){t.d(a,{Zo:function(){return k},kt:function(){return c}});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function u(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),m=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},k=function(e){var a=m(e.components);return r.createElement(i.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,k=u(e,["components","mdxType","originalType","parentName"]),p=m(t),c=n,d=p["".concat(i,".").concat(c)]||p[c]||s[c]||o;return t?r.createElement(d,l(l({ref:a},k),{},{components:t})):r.createElement(d,l({ref:a},k))}));function c(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=p;var u={};for(var i in a)hasOwnProperty.call(a,i)&&(u[i]=a[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,l[1]=u;for(var m=2;m<o;m++)l[m]=t[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2764:function(e,a,t){t.r(a),t.d(a,{contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return k}});var r=t(7462),n=t(3366),o=(t(7294),t(3905)),l=["components"],u={title:"Era lehenetsian ezarritako zoom balorea eta ausazkoak",sidebar_position:4},i=void 0,m={unversionedId:"eu/markers/random-markers-default-zoom",id:"eu/markers/random-markers-default-zoom",isDocsHomePage:!1,title:"Era lehenetsian ezarritako zoom balorea eta ausazkoak",description:"Ausazko markagailuak era lehenetsian zehaztutako zoom-akin",source:"@site/docs/eu/markers/random-markers-default-zoom.md",sourceDirName:"eu/markers",slug:"/eu/markers/random-markers-default-zoom",permalink:"/ng-leaflet/eu/markers/random-markers-default-zoom",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Era lehenetsian ezarritako zoom balorea eta ausazkoak",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Markagailu bat baino gehiago gehitu",permalink:"/ng-leaflet/eu/markers/two-or-more-markers"},next:{title:"Ausazkoak eta zoom aukeraketa",permalink:"/ng-leaflet/eu/markers/random-markers-select-zoom"}},k=[{value:"Ausazko markagailuak era lehenetsian zehaztutako zoom-akin",id:"ausazko-markagailuak-era-lehenetsian-zehaztutako-zoom-akin",children:[]}],s={toc:k};function p(e){var a=e.components,t=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"ausazko-markagailuak-era-lehenetsian-zehaztutako-zoom-akin"},"Ausazko markagailuak era lehenetsian zehaztutako zoom-akin"),(0,o.kt)("p",null,"Aukera honek baliagarria da puntu zehatz batean ausazko markagilu sorta bat mapan gehitu nahi dugunean."),(0,o.kt)("p",null,"Honen erabilpena da adibide azkarrak sortzea konfigurazio askorik zarri gabe eta eskuz gehitu gabe markagailuak."),(0,o.kt)("p",null,"Atal honetan era lehenetsian ezarritako zoom maila 12-koa izango da. Balio hau aldatu ahalko dugu konfigurazioaz eta hau ",(0,o.kt)("a",{parentName:"p",href:"/ng-leaflet/eu/markers/random-markers-select-zoom"},"hurrengo atal honetan ikusi ahalko dugu"),"."),(0,o.kt)("p",null,"Hurrengo kodea kontutan hartu zehaztu behar dugu:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"    randomMarkers = true;\n")),(0,o.kt)("p",null,"Konponentea eta plantilla aplikatuz:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Component, VERSION } from '@angular/core';\n\n@Component({\n  selector: 'my-app',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css'],\n})\nexport class AppComponent {\n  randomMarkers = true;\n}\n\n")),(0,o.kt)("p",null,"HTML-ean aplikatuz"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ng-leaflet-map [mapId]="\'random_markers_map\'" [randomMarkers]="randomMarkers">\n</ng-leaflet-map>\n')),(0,o.kt)("p",null,"Hurrengo emaitza lortuz:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/07-random-default-zoom.png",alt:"Random Markers with Default Zoom level"})),(0,o.kt)("p",null,"Hurrengo estekan, adibidea daukazue eskura probatu eta aldaketak egiteko praktikatzeko asmoz:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/angular-leaflet-map-random-markers?embed=1&file=src/app/app.component.ts&theme=dark"},"Stackblitz - Era lehentsian zehaztutako ausazko markagailuak")))}p.isMDXComponent=!0}}]);