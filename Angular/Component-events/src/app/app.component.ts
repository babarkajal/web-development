import {Component } from "@angular/core";

@Component ({
	selector:"app-root",
	templateUrl:"./app.component.html",
	styleUrls:['./app.component.css']
})

export class AppComponent {

	serverArray:{name:string, content: string}[]= [{name:"TestServer", content:"Just a test!"}]

	onAddServer=(data:{name:string, content:string})=>{
		this.serverArray.push({...data})
	}

	changeServerName() {
		this.serverArray[0].name = "Changed name";
	}
	onDestroyElement() {
		this.serverArray.splice(0,1)
	}
}