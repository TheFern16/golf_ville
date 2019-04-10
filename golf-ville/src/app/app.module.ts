import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CallawayComponent } from './brands/callaway/callaway.component';
import { CobraComponent } from './brands/cobra/cobra.component';
import { HeaderComponent } from './header/header.component';
import { MizunoComponent } from './brands/mizuno/mizuno.component';
import { PingComponent } from './brands/ping/ping.component';
import { TaylorMadeComponent } from './brands/taylorMade/taylorMade.component';
import { TitleistComponent } from './brands/titleist/titleist.component';

@NgModule({
  declarations: [
    AppComponent,
    CallawayComponent,
    CobraComponent,
    HeaderComponent,
    MizunoComponent,
    PingComponent,
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
