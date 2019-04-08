import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaylorMadeComponent } from './brands/taylorMade/taylorMade.component';
import { TitleistComponent } from './brands/titleist/titleist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaylorMadeComponent,
    TitleistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
