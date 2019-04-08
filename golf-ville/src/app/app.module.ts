import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component'
import { TitleistComponent } from './brands/titleist/titleist.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TitleistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    LandingComponent,
    TitleistComponent    
  ]
})
export class AppModule { }
