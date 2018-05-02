import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './components/home/home.component';
import { AddsComponent } from './components/adds/adds.component';
import { PrintComponent } from './components/print/print.component';
import { WebComponent } from './components/web/web.component';
import { GamesComponent } from './components/games/games.component';
import { GoingdutchComponent } from './components/goingdutch/goingdutch.component';

const appRoutes: Routes = [
  { path: "adds", component: AddsComponent, data: { title: 'Online Ads' } },
  { path: "printwork", component: PrintComponent, data: { title: 'Print Work' } },
  { path: "web", component: WebComponent, data: { title: 'Websites' } },
  { path: "mygames", component: GamesComponent, data: { title: 'Games' } },
  { path: "goingdutch", component: GoingdutchComponent, data: { title: 'Going Dutch App' } },
  { path: "", component: HomeComponent, data: { title: 'Roy Adams Porfolio' } },
  { path: "**", component: HomeComponent, data: { title: 'Roy Adams Porfolio' } }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
