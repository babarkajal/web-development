import {
  Directive,
  Input,
  TemplateRef,
  ViewChildDecorator,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appUnless]',
})
/**
 ** Custom structural directive: Opposite to ngIf
 * TODO: It's takes reference to the element and renders the data if condition is false
 */
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
