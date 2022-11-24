import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightNames]'
})

/* ---------------------------- custom directive ---------------------------- */
export class HighlightNamesDirective {

  constructor(private el: ElementRef) {

	//bad way to access using directive
	this.el.nativeElement.style.backgroundColor= 'orange'
   }

}
