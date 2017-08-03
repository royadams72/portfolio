import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {HomeComponent} from './components/home/home.component';
import {AddsComponent} from './components/adds/adds.component';
import {PrintComponent} from './components/print/print.component';
import {WebComponent} from './components/web/web.component';
import {GamesComponent} from './components/games/games.component';
import {GoingdutchComponent} from './components/goingdutch/goingdutch.component';

const appRoutes: Routes = [
   {path: "adds", component: AddsComponent},
   {path: "printwork", component: PrintComponent},
   {path: "web", component: WebComponent},
   {path: "mygames", component: GamesComponent},
   {path: "goingdutch", component: GoingdutchComponent},
   {path: "", component: HomeComponent},
   {path: "**", component: HomeComponent}
]

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
