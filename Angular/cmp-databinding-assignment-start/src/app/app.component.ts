import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	gameCount: number = 0;
	intervalId:any;
	oddArray:number[] = [];
	evenArray:number[] = [];
	
	onStartGame(){
		this.intervalId = setInterval(()=>{this.gameCount = this.gameCount+1;
		if(this.gameCount%2===0) this.evenArray.push(this.gameCount);
		else this.oddArray.push(this.gameCount)
		} , 1000);
	}

	onPauseGame() {
		clearInterval(this.intervalId)

	}
}
