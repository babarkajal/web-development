import { Component, OnInit } from '@angular/core';

@Component({

 //SELECTOR SELECTS THE ELEMENT WHICH NAME IS app-servers
//   selector: 'app-servers',

 //SELECTOR SELECTS THE ELEMENT WHICH attribute IS app-servers
//   selector: '[app-servers]',

 //SELECTOR SELECTS THE ELEMENT WHICH CLASS NAME IS app-servers
//   selector: '.app-servers',

 //SELECTOR SELECTS THE ELEMENT WHICH ID  IS app-servers
  selector: '.app-servers',




//   templateUrl: './servers.component.html',
//   styleUrls: ['./servers.component.css']

	//INLINE TEMPLATE 
	template:`<h3>Main Server component contain app-server elements</h3>
	<app-server></app-server>
	<app-server></app-server>`,

	//INLINE STYLES
	styles: [`
			  h3 {color:red;}
			`]

})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
