import { Directive , ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlightText]'
})
export class HighlightTextDirective {

	@HostListener('mouseenter') onMouseEnter() {
		this.highlight('yellowgreen');
	  }
	  
	  @HostListener('mouseleave') onMouseLeave() {
		this.highlight('yellow');
	  }
	  
	  private highlight(color: string) {
		this.el.nativeElement.style.backgroundColor = color;
	  }
	constructor(private el: ElementRef) {
		this.el.nativeElement.style.backgroundColor = 'yellow';
	 }

}
