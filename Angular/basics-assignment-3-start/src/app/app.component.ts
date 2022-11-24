import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	buttonClicked= false;
	clickLog : Date[] =[];
	toggleButton(){
		this.buttonClicked = !this.buttonClicked;
		this.clickLog.push(new Date());
	}

	getBackColor(index: number) {
		return	index >= 5 ? "blue" :"" 
	}
}
