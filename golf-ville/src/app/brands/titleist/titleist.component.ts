import { Component } from '@angular/core';

@Component({
  selector: 'app-titleist',
  templateUrl: './titleist.component.html',
  styleUrls: ['./titleist.component.css']
})
export class TitleistComponent {
	clubs = [
		{
			setName: 'AP1',
			setPath: '/assets/ap1.jpeg',
			setText: 'THE ULTIMATE GAME IMPROVEMENT IRON.  With explosive ball speed and an even more-forgiving face, 718 AP1 irons reward you in every way you can imagine. All while maintaining our classically coveted look and feel.'
		},
		{
			setName: 'AP2',
			setPath: '/assets/ap2.jpeg',
			setText: 'THE GOLD STANDARD FOR MODERN TOUR IRONS.  718 AP2® irons raise the bar on the gold standard for tour iron excellence. If you demand ultimate playability with consistent distance and forgiveness, these are the irons for you.'
		},
		{
			setName: 'AP3',
			setPath: '/assets/ap3.jpeg',
			setText: 'THE PLAYER’S DISTANCE IRON.  The all-new 718 AP3™ irons truly represent the best of both worlds. Everything we’ve learned from creating and advancing our AP1 and AP2 irons merged to create our longest, fastest player’s iron ever. It’s the player’s distance iron.'
		}
	]
};
