import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	username: string = '';
	isResetEnabled: boolean = false;

	onUsernameChange() {
		if (this.username === '') {
			this.isResetEnabled = false;
		} else {
			this.isResetEnabled = true;
		}
	}

	onResetUsername() {
		this.username = '';
		this.isResetEnabled = false;
	}

}
