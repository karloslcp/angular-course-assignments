import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	displayDetails = false;
	numberOfClicks = [];
	clickNumber = 0;

	onDisplayDetails() {
		this.clickNumber = this.clickNumber + 1;
		this.numberOfClicks.push(this.clickNumber);
		this.displayDetails = !this.displayDetails;
	}
}
