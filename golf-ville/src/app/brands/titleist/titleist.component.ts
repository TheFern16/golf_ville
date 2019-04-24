import { Component } from '@angular/core';

@Component({
  selector: 'app-titleist',
  templateUrl: './titleist.component.html',
  styleUrls: ['./titleist.component.css']
})
export class TitleistComponent {
	// clubs = ['Drivers', 'Fairways', 'Hybrids', 'Irons', 'Putters'];
	clubs = [
		{
			setName: 'AP1',
			setPath: '/assets/ap1.jpeg'
		},
		{
			setName: 'AP2',
			setPath: '/assets/ap2.jpeg'
		},
		{
			setName: 'AP3',
			setPath: '/assets/ap3.jpeg'
		}
	]
};
