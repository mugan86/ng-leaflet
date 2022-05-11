import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'example/:page',
    loadChildren: () => import('./pages/example/example.module').then(m => m.ExampleModule)
  },
  {
    path: 'storybook',
    loadChildren: () => import('./pages/storybook/map/map.module').then(m => m.MapModule)
  },
  {
    path: '**',
    redirectTo: 'storybook',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
