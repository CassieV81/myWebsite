import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFixNav]'
})
export class FixNavDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll')
  onScroll() {
    this.renderer.addClass(this.element.nativeElement, 'fixNav');
  }
  // @HostListener('window:scrollend')
  // removeFixNav() {
  //   this.renderer.removeClass(this.element.nativeElement, 'fixNav');
  // }

}
