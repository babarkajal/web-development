import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlightNamesBetter]',
})
export class HighlightNamesBetterDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // CUSTOM PROPERTY BINDING OF DIRECTIVE
  @Input() defaultColor: string = '';
  @Input() highlightColor: string = '';

  /**
   ** EVEN EASIER WAY TO BIND HOST'S PROPERTY
   * TODO: It takes dom-element property as a argument and bind property on this decorator
   * @param string takes hostPropertyName as a argument
   * NOW background is a directive property which refers to the DOM style background color
   */
  @HostBinding('style.backgroundColor') background: string = '';
  @HostBinding('class.openNewClassName') newClass = false;

  ngOnInit() {
    /* this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      'lightblue'
    );
    this.renderer.setStyle(this.el.nativeElement, 'padding', '10px');
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '2rem'); */
    console.log(this.defaultColor, this.highlightColor);
    this.background = this.defaultColor;
  }

  /**
   * *HOST LISTENER IS USED TO LISTEN ELEMENT'S EVENTS WHICH HAVING THIS DIRECTIVE
   * It imported from @angular/core
   * @param  e: event name 2. args
   */
  @HostListener('mouseenter') hover(e: Event) {
    // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'orange');

    //USING HOST BINDING
    this.background = this.highlightColor;
  }

  @HostListener('mouseleave') hoverLeave(e: Event) {
    /* this.renderer.setStyle(
      this.el.nativeElement,
      'backgroundColor',
      'lightblue'
    ); */
    this.background = this.defaultColor;
  }

  @HostListener('click') changeId(e: Event) {
    console.log('CLick event called');
    this.newClass = true;
  }
}
