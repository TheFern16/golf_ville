import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component'
import { TitleistComponent } from './brands/titleist/titleist.component';

const applicationRoutes: Routes = [
	// { path: 'titleist', component: Titleist },
	// { path: '', redirectTo: '/landing', pathMatch: 'full'},
	// { path: '**', component: 404 }

]

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TitleistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // RouterModule.forRoot(applicationRoutes)
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    LandingComponent,
    TitleistComponent    
  ]
})
export class AppModule { }
