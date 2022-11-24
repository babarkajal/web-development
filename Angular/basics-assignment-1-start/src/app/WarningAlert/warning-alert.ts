import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
	selector:"warning-alert",
	templateUrl:"./warningAlert.component.html",
	styles: [`
		p {
			color:red;
			font-size:20px;
		}
	`]
})

export class WarningAlert { }