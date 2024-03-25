import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShowIcon]'
})
export class ShowIconDirective {

  value: string = '';

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') 
  onMouseEnter() {
    console.log(this.element.nativeElement)
    console.log(this.renderer)
    // this.renderer.appendChild(this.element.nativeElement, 'h5');
  } 

  // @HostListener('mouseleave') 
  // onMouseLeave() {
  //   this.renderer.removeClass(this.element.nativeElement, 'grow-icon');
  // } 


}
