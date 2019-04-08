import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaylorMadeComponent } from './brands/taylorMade/taylorMade.component';
import { TitleistComponent } from './brands/titleist/titleist.component'

const routes: Routes = [
	{ path: 'TaylorMade',         component: TaylorMadeComponent },
	{ path: 'Titleist',           component: TitleistComponent },
	{ path: '**',                 component: TitleistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
