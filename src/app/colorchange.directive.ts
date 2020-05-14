import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorchange]'
})
export class ColorchangeDirective {

  constructor( private el: ElementRef, private randerer: Renderer2) {
    this.changebgcolor('red');
  }
  changebgcolor(color: string)
  {
    this.randerer.setStyle(this.el.nativeElement, 'color' , color);
  }

}
