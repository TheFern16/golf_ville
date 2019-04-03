import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Brand Choices';
  titles = ['Mizuno', 'Titleist', 'Taylormade', 'Cobra', 'Ping'];

  handleClick(event) {
  	this.title = event.target.innerHTML;
  }

  handleMouseOver(event) {
	event.target.classList.add('active');
  }
};
