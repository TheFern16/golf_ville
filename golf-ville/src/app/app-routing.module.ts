import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitleistComponent } from './brands/titleist/titleist.component'

const routes: Routes = [
	{ path: 'Titleist',           component: TitleistComponent },
	{ path: '**',                 component: TitleistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
