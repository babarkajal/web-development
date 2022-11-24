import { Component, OnInit } from '@angular/core';

@Component({

 //SELECTOR SELECTS THE ELEMENT WHICH NAME IS app-servers
  selector: 'app-servers',
  templateUrl: './servers.component.html',

 //SELECTOR SELECTS THE ELEMENT WHICH attribute IS app-servers
//   selector: '[app-servers]',

 //SELECTOR SELECTS THE ELEMENT WHICH CLASS NAME IS app-servers
//   selector: '.app-servers',

 //SELECTOR SELECTS THE ELEMENT WHICH ID  IS app-servers
//   selector: '.app-servers',




 
//   styleUrls: ['./servers.component.css']

	//INLINE TEMPLATE 
	/* template:`<h3>Main Server component contain app-server elements</h3>
	<app-server></app-server>
	<app-server></app-server>`,
 */
	//INLINE STYLES
	styles: [`
			h3 {color:red;}
			.form-control {
						margin-bottom:10px
			}
			
			  
	`]

})
export class ServersComponent implements OnInit {

	allowNewServer=false;
	createServer = "";
	serverName = "";
	buttonClicked=false;
	serversArray=["Testing 1" , 'Testing 2']

  	constructor() {
		setTimeout(()=>{
			this.allowNewServer = true
		},2000)
   }

  ngOnInit(): void {
  }

  	//event binding
  onCreateServer(){
	this.serversArray.push(this.serverName)
	this.buttonClicked= true;
	this.createServer="Server was created! Name of the server is "+this.serverName
  }

  onUpdateServerName=(event: Event)=>{
	//BECAUSE THE PARAMETER TYPE IS EVENT AND WE ARE ASSIGNING VALUE OF NO TYPE
	this.serverName=(<HTMLInputElement>event.target).value
  }

}
