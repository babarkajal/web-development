import { Component, OnInit } from '@angular/core';

@Component({
 //selector can select by class name, element , id or property
  selector: '#app-servers',
  template: `<app-server></app-server>
  			 <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
