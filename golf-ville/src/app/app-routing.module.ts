import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MizunoComponent } from './brands/mizuno/mizuno.component';
import { PingComponent } from './brands/ping/ping.component';
import { TaylorMadeComponent } from './brands/taylorMade/taylorMade.component';
import { TitleistComponent } from './brands/titleist/titleist.component'

const routes: Routes = [
  { path: 'Mizuno',             component: MizunoComponent },
  { path: 'Ping',               component: PingComponent },
	{ path: 'TaylorMade',         component: TaylorMadeComponent },
	{ path: 'Titleist',           component: TitleistComponent },
	{ path: '**',                 component: TitleistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
