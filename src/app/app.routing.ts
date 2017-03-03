import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {HomeComponent} from './components/home/home.component';
import {AddsComponent} from './components/adds/adds.component';
import {PrintComponent} from './components/print/print.component';
import {SplashComponent} from './components/splash/splash.component';
import {GamesComponent} from './components/games/games.component';

const appRoutes: Routes = [
   {path: "", component: HomeComponent},
   {path: "adds", component: AddsComponent},
   {path: "print", component: PrintComponent},
   {path: "splash", component: SplashComponent},
   {path: "games", component: GamesComponent}
]

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
