import { Component, OnInit ,Input, ViewEncapsulation, SimpleChanges, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {

	// THIS IS INPUT DECORATOR USED TO DEFINE THAT serverElement is received from the parent
	@Input('serverElement') element: {name:string, content: string} = {name:"", content:""};
	@Input() name:string = "";
	@ViewChild("heading") header: ElementRef={nativeElement: ""};

	//INITIALIZATION
	constructor() { 
		console.log("Constructor called")
	}

	//GETS CALLED AT THE TIME OF INITIALIZATION
	ngOnInit(): void {
		console.log("ngOnInit called");
		console.log("Text content" , this.header.nativeElement.textContent);
		
	}

	//GETS CALLED WHEN INPUT DIRECTIVES CHANGES 
	ngOnChanges(changes: SimpleChanges) {
		console.log("ngOnChanges called", changes)
	}

	//GETS CALLED FOR EVERY CHANGE
	ngDoCheck(){
		console.log("ngDoCheck called")
	}

	//GETS CALLED AFTER CONTENT PROJECTION
	ngAfterContentInit(){
		console.log("ngAfterContentInit called")
	}
	// CALLED EACH CONTENT CHECKED CYCLE
	ngAfterContentChecked(){
		console.log("ngAfterContentChecked called")
	}

	//GETS CALLED AFTER VIEW INIT
	ngAfterViewInit(){
		console.log("ngAfterViewInit called");
		console.log("Text content" , this.header.nativeElement.textContent);
	}
	// CALLED AFTER VIEW GET CHECKED
	ngAfterViewChecked(){
		console.log("ngAfterViewChecked called")
	}

	// CALLED ONCE BEFORE DESTROYING THE COMPONENT
	ngOnDestroy(){
		console.log("ngOnDestroy called")
	}

}
