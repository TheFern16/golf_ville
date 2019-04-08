import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Brand Choices';
  titles = ['Callaway', 'Cobra', 'Mizuno', 'Ping', 'TaylorMade', 'Titleist'];

  handleClick(event) {
  	this.title = event.target.innerHTML;
  };

  handleMouseOver(event) {
	  event.target.classList.add('active');
  };

  handleMouseLeave(event) {
  	event.target.classList.remove('active');
  };
};
