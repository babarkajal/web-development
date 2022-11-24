import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

	serverName =""
	serverContent = ""

	@Output('serverCreateAlias') serverCreate=new EventEmitter<{name: string, content: string}>()
	@ViewChild('serverContentInput') serverContentInput : ElementRef = {nativeElement: null};

	constructor() { }

	ngOnInit(): void {
	}

	onAddServerName(data: HTMLInputElement) {
		this.serverCreate.emit({name: data.value, content: this.serverContentInput.nativeElement.value})
		this.serverName="";
		this.serverContent ="";
	}
}
