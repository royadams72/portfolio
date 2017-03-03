import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { routing } from './app.routing';
import { FooterComponent } from './components/footer/footer.component';
import { AddsComponent } from './components/adds/adds.component';
import { NavComponent } from './components/nav/nav.component';
import { PrintComponent } from './components/print/print.component';
import { SplashComponent } from './components/splash/splash.component';
import { GamesComponent } from './components/games/games.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    AddsComponent,
    NavComponent,
    PrintComponent,
    SplashComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
