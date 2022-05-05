export const appModule = `
  import { NgLeafletModule } from '@mugan86/ng-leaflet';
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  
  import { AppComponent } from './app.component';
  
  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      NgLeafletModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }`;