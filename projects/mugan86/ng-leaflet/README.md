# Angular Leaflet Map 

[![npm version](https://badge.fury.io/js/@mugan86%2Fng-leaflet.svg)](https://badge.fury.io/js/@mugan86%2Fng-leaflet) ![npm](https://img.shields.io/npm/dw/@mugan86/ng-leaflet)

## Español 🇪🇸

Proyecto creado con [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2. para desarrollo de aplicaciones Angular con información que muestra mapas para diferentes propósitos.

### ⚙ Instalación / Configuración

Para poder empezar a trabajar con la librería, vamos a usar la siguiente referencia:

[Librería NPM - Angular Leaflet Map](https://www.npmjs.com/package/@mugan86/ng-leaflet)

Teniendo como referencia el anterior enlace, para instalar y configurar el paquete con el objetivo de poder implementar los Mapas de Leaflet en Angular de manera sencilla debemos de seguir los siguientes pasos:

#### Instalar el paquete NPM

Ejecutaremos el siguiente comando:

NPM
```
npm i @mugan86/ng-leaflet
```
Yarn
```
yarn add @mugan86/ng-leaflet
```

Con estos instalaremos las dependencias en nuestro proyecto.

#### Añadir módulo del paquete

En el apartado que vayamos a usar la funcionalidad, debemos de añadir el módulo **"NgLeafletModule" llamando a la función forRoot()** y podemos tener como referencia hacerlo como ejemplo con **app.module.ts.**

De esta manera estaremos haciendo la configuración básica, más adelante se explicará como especificar las configuraciones para implementar la configuración global para no tener que estar añadiendo una y otra vez las configuraciones que usaremos en el mapa por defecto.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgLeafletModule } from '@mugan86/ng-leaflet';

@NgModule({
  imports: [BrowserModule, NgLeafletModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

#### Añadir referencia de estilos

Tenemos que tener en cuenta que cuando hemos instalado el paquete, se añadirá la carpeta **`"@mugan86/ng-leaflet"`** dentro de **`"node_modules"`** que contiene el fichero de estilos necesarios para mostrar los mapas correctamente.

El fichero está ubicado en:

```bash
node_modules/@mugan86/ng-leaflet/assets/styles/common.css
```

Podemos añadirlo en el fichero **`"styles.css"`** de la siguiente manera:

```bash
@import url('./../node_modules/@mugan86/ng-leaflet/assets/styles/common.css');
```

Con estos ajustes, podemos empezar a trabajar con las funcionalidades de los mapas [a partir de esta referencia](https://mugan86.github.io/ng-leaflet/es/aspectos-basicos/mapa-basico).

#### Estructura para configuraciones

En este apartado, se os muestra la información general que se usará como base para implementar las configuraciones en las diferentes variantes.

Estas las usaremos para las funcionalidades que tiene la librería y se irán explicando punto por punto cuál será su finalidad, como se implementa y el resultado para poder entender todo mejor.

Tendremos la interface **`IConfigMap`**, que es la estructura que usaremos para definir las diferentes opciones que se implementará en los mapas. Como trabajaar con ello se explicar´con más detalle en ala [documentación oficial](https://mugan86.github.io/ng-leaflet/es/summary) que se irá actualizando y se pueden ver [ejemplos](https://mugan86.github.io/ng-leaflet/es/demos-ejemplos) usando esta interface

```typescript
import { ControlPosition } from "leaflet";

export interface IConfigMap {
    markerColor?: MarkerColorOptions;   // Opciones para seleccionar uno de los colores existentes
    center?: [number, number];          // ubicación donde se centra mapa => [latitud, longitud]
    scale?: IScaleOptions | undefined;  // Opciones del control de escala
    layers?: ILayers;                   // Para añadir capaas base y superposición con control capas
    zoom?: IZoomOptions;                // Opciones para el control del zoom
    fullscreen?: boolean;               // Habilitar control para mostrar mapa en pantalla completa
    defaultLayer?: IBaseLayer;          // Opción para añadir la capa principal (única)
    watermark?: IWatermarkOptions;      // Control marca de agua con sus opciones
    fitBounds?: boolean;                // Opción para centrar en base a marcadores
    ourLocation?: {                     // Habilitar control de geolocalización
        active: boolean;
        zoom?: number;
    };
    drawRoute?: IDrawRouteOptions;      // Opciones para dibujar ruta
}
```

#### Más detalles

Podemos encontrar más información en [documentación oficial](https://mugan86.github.io/ng-leaflet/es/summary).

## English 🏴󠁧󠁢󠁥󠁮󠁧󠁿

[Angular CLI] (https://github.com/angular/angular-cli) Project created with version 13.0.2. for Angular application development with information showing maps for different purposes.

### ⚙ Install / Configuration

In order to start working with the library, we are going to use the following reference:

[NPM Library - Angular Leaflet Map](https://www.npmjs.com/package/@mugan86/ng-leaflet)

Taking the previous link as a reference, to install and configure the package in order to be able to implement Leaflet Maps in Angular in a simple way, we must follow the following steps:

#### Install NPM Package

We will execute the following command:

NPM
```
npm i @mugan86/ng-leaflet
```
Yarn
```
yarn add @mugan86/ng-leaflet
```

With these we will install the dependencies in our project.

#### Add package module

In the section that we are going to use the functionality, we must add the module **"NgLeafletModule" calling the function forRoot()** and we can have as a reference to do it as an example with **app.module.ts.**

In this way we will be doing the basic configuration, later it will be explained how to specify the configurations to implement the global configuration so as not to have to add the configurations that we will use in the default map over and over again.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgLeafletModule } from '@mugan86/ng-leaflet';

@NgModule({
  imports: [BrowserModule, NgLeafletModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

#### Add styles references

We have to take into account that when we have installed the package, the folder **`"@mugan86/ng-leaflet"`** will be added inside **`"node_modules"`** which contains the styles file needed to display the maps correctly.

The file is located at:

```bash
node_modules/@mugan86/ng-leaflet/assets/styles/common.css
```

We can add it to the file **`"styles.css"`** as follows:

```bash
@import url('./../node_modules/@mugan86/ng-leaflet/assets/styles/common.css');
```

With these settings, we can start working with the map features [from this reference](https://mugan86.github.io/ng-leaflet/en/aspectos-basicos/mapa-basico).

#### Structure for configurations

In this section, we show you the general information that will be used as a basis to implement the configurations in the different variants.

We will use these for the functionalities that the library has and will explain point by point what its purpose will be, how it is implemented and the result in order to understand everything better.

We will have the interface **`IConfigMap`**, which is the structure that we will use to define the different options that will be implemented in the maps. How to work with it will be explained in more detail in the [official documentation](https://mugan86.github.io/ng-leaflet/en/summary) that will be updated and you can see [examples](https://mugan86.github.io/ng-leaflet/en/demos-ejemplos) using this interface

```typescript
import { ControlPosition } from "leaflet";

export interface IConfigMap {
    markerColor?: MarkerColorOptions;   // Options to select one of the existing colors
    center?: [number, number];          // location where map is centered => [latitude, longitude]
    scale?: IScaleOptions | undefined;  // Scale Control Options
    layers?: ILayers;                   // To add base and overlay layers with control layers
    zoom?: IZoomOptions;                // Options for zoom control
    fullscreen?: boolean;               // Enable control to show map in full screen
    defaultLayer?: IBaseLayer;          // Option to add the main (only) layer
    watermark?: IWatermarkOptions;      // Watermark control with your options
    fitBounds?: boolean;                // Option to center based on markers
    ourLocation?: {                     // Enable geolocation control
        active: boolean;
        zoom?: number;
    };
    drawRoute?: IDrawRouteOptions;      // Options for drawing path
}
```
#### More details

We found more info in official [documentation](https://mugan86.github.io/ng-leaflet/en/summary).
