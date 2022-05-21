import { ModuleWithProviders, NgModule } from '@angular/core';
import { MapBasicModule } from './components/map/map.module';
import { IConfigMap, ISizeMap } from './models';
import { DefaultConfig } from './services';

@NgModule({
  declarations: [
  ],
  imports: [
    MapBasicModule
  ],
  exports: [
    MapBasicModule
  ]
})
export class NgLeafletModule { 
  public static forRoot(config?: IConfigMap, size?: ISizeMap): ModuleWithProviders<NgLeafletModule> {
    return {
      ngModule: NgLeafletModule,
      providers: [
        DefaultConfig,
        {
          provide: 'config',
          useValue: config
        },
        {
          provide: 'size',
          useValue: size
        }
      ]
    };
  }
}
