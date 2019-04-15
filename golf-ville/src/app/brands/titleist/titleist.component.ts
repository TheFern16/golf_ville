import { Component } from '@angular/core';

@Component({
  selector: 'app-titleist',
  templateUrl: './titleist.component.html',
  styleUrls: ['./titleist.component.css']
})
export class TitleistComponent {
	clubs = ['Drivers', 'Fairways', 'Hybrids', 'Irons', 'Putters'];
};
